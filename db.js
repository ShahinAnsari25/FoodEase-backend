const mongoose = require('mongoose');
const connectionUrl = "mongodb+srv://shahinansari107:W2i0uYSQQEasKTO2@cluster0.ee6wo.mongodb.net/FoodEase_App?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB = async () => {
   try {
      await mongoose.connect(connectionUrl)
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