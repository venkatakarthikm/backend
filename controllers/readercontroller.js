const Reader = require("../models/Reader")
const News = require("../models/News")
const Comment = require("../models/Comment");
const Ratings = require("../models/Ratings");

const checkreaderlogin = async (request,response)=>
{
    try
    {
        const input = request.body
        const reader = await Reader.findOne(input)
        response.json(reader)
    }
    catch(error)
    {
        response.status(500).send(error.message);
    }
};

const insertreader = async (request, response) => {
    try 
    {
      const input = request.body;
      const reader = new Reader(input);
      await reader.save();
      response.status(200).send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const viewnews = async (request, response) => 
    {
       try 
       {
         const news = await News.find().sort({_id:-1});
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

     const addcomment = async (request, response) => {
      try 
      {
        const input = request.body;
        const comment = new Comment(input);
        await comment.save();
        response.status(200).send('commented Successfully');
      } 
      catch(e) 
      {
        console.log(e.message)
        response.status(500).send(e.message);
      }
    };

    const viewcomments = async (request, response) => 
      {
        try 
        {
          const newsid = request.params.newsid
          const comments = await Comment.find({ newsid: newsid });
          if(comments.length==0)
          {
            response.status(200).send("No Comments");
          }
          else
          {
            response.json(comments);
          }
        } 
        catch (error) 
        {
          response.status(500).send(error.message);
        }
       };

       const saverating = async (request, response) => {
        try {
          const input = request.body;
      
          // Validate input
          if (!input.newsid || !input.rusername || isNaN(input.ratingpoint) || input.ratingpoint < 1 || input.ratingpoint > 5) {
            throw new Error('Invalid input data.');
          }
      
          const filter = { newsid: input.newsid, rusername: input.rusername };
          const update = { ratingpoint: input.ratingpoint };
      
          const options = {
            new: true,
            upsert: true,
          };
      
          // Update or insert rating
          const updatedRating = await Ratings.findOneAndUpdate(filter, update, options);
      
          response.json(updatedRating);
        } catch (error) {
          console.error('Error saving or updating rating:', error.message);
          response.status(500).send('An error occurred while saving or updating the rating.');
        }
      };

      const getmyrating = async (request, response) => {
        try {
          const newsid = request.params.newsid
          const username = request.params.username
          const ratings = await Ratings.findOne({ newsid:newsid, rusername:username });
          response.json(ratings);
        } catch (error) {
          console.error(error.message);
          response.status(500).send('not found');
        }
      };

module.exports = {checkreaderlogin,insertreader,viewnews,addcomment,viewcomments,saverating,getmyrating}