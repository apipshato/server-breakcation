const Item = require("../models/Item");
const item = require("../models/Item");
const Treasure = require('../models/Activity');
const Treveler = require('../models/Booking');
const Category = require('../models/Category');
const Bank = require('../models/Bank');
const Booking = require('../models/Booking');
const Member = require('../models/Member');

module.exports = {
  landingPage: async (req, res) => {
    try {
      const mostPicked = await Item.find()
      .select('_id title country city price unit imageId')
      .limit(5)
      .populate({ path: 'imageId', select: '_id imageUrl' })

      const category = await Category.find()
        .select('_id name')
        .limit(3)
        .populate({
          path: 'itemId',
          select: '_id title country city isPopular  imageId',
          perDocumentLimit: 4,
          option: { sort: { sumBooking: -1 } },
          populate: {
            path: 'imageId',
            select: '_id imageUrl',
            perDocumentLimit: 1
          }
        })

      const treveler = await Treveler.find();
      const treasure = await Treasure.find();
      const city = await Item.find();

      res.status(200).json({
         hero :{
            travelers: treveler.length,
            treasures: treasure.length,
            cities : city.length
         },
        
        mostPicked,
        category 
        });
    } catch (error) {}
  }
};
