const mongoose = require('mongoose');
require('dotenv').config();
const mongoDB = async () => {
   try {
      await mongoose.connect(process.env.DATABASE_URL)
      const db = mongoose.connection.db;
      const fetched_data = db.collection("FoodItems");
      const data = await fetched_data.find({}).toArray();
      global.FoodItems = data;

      const fetched_data_category = db.collection("Category");
      const dataCategory = await fetched_data_category.find({}).toArray();
      global.FoodCategory = dataCategory;
   }
   catch (error) {
      console.log(error);

   }
}
module.exports = mongoDB;