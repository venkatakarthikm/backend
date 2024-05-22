const Publisher = require("../models/Publisher")
const News = require("../models/News")

const checkpublisherlogin = async (request,response)=>
{
    try
    {
        const input = request.body
        const publisher = await Publisher.findOne(input)
        response.json(publisher)
    }
    catch(error)
    {
        response.status(500).send(error.message);
    }
};

const publishnews = async (request, response) => {
    try 
    {
      const input = request.body;
      const news = new News(input);
      await news.save();
      response.status(200).send('NEWS Posted Successfully');
    } 
    catch(e) 
    {
      console.log(e.message)
      response.status(500).send(e.message);
    }
  };

  const viewmynews = async (request, response) => 
    {
       try 
       {
         const puname = request.params.puname
         const news = await News.find({"publisher.username":puname}).sort({_id:-1});
         if(news.length==0)
         {
           response.status(200).send("DATA NOT FOUND");
         }
         else
         {
           response.json(news);
         }
       } 
       catch (error) 
       {
         response.status(500).send(error.message);
       }
     };

     const viewmynewstodelete = async (request, response) => 
      {
         try 
         {
           const newsid = request.params.newsid
           const news = await News.findOne({ newsid: newsid });
           if(news.length==0)
           {
             response.status(200).send("DATA NOT FOUND");
           }
           else
           {
             response.json(news);
           }
         } 
         catch (error) 
         {
           response.status(500).send(error.message);
         }
       };

       const updatemynews = async (request, response) => 
        {
          try 
          {
            const input = request.body;
            const newsid = input.newsid; 
            const news = await News.findOne({ newsid });
            if (!news) 
            {
              response.status(200).send("news not found with the provided newsid");
            }
            for (const key in input) 
            {
              if (key !== 'newsid' && input[key]) {
                news[key] = input[key];
              }
            }
            await news.save();
            response.status(200).send("news Updated Successfully");
          } 
          catch (e) 
          {
            response.status(500).send(e.message);
          }
        };

        const deletemynews = async (request, response) => 
          {
             try 
             {
               const newsid = request.params.newsid
               const news = await News.findOne({"newsid":newsid})
               if(news!=null)
               {
                 await News.deleteOne({"newsid":newsid})
                 response.status(200).send(" News Deleted Successfully")
               }
               else
               {
                 response.status(200).send("News of that ID Not Found")
               }
         
             } 
             catch (error) 
             {
               response.status(500).send(error.message);
             }
           };

           const getavgrating = async (request, response) => {
            try {
              const newsid = request.params.newsid;
      
              // Find all ratings for the specified newsid
              const ratings = await Ratings.find({ newsid: newsid });
      
              // Calculate the average rating
              let totalRating = 0;
              for (const rating of ratings) {
                  totalRating += rating.ratingpoint;
              }
              const averageRating = ratings.length > 0 ? totalRating / ratings.length : 0;
      
              // Send the averageRating back as a response
              response.json({ averageRating });
          } catch (error) {
              console.error(error.message);
              response.status(500).send('Internal Server Error');
          }
        };


module.exports = {checkpublisherlogin,publishnews,viewmynews,viewmynewstodelete,updatemynews,deletemynews,getavgrating}