const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const mongoDB = require('./db')
const User = require('./Routes/CreateUser.js')
const displayData = require('./Routes/DisplayData.js')
const createOrder = require('./Routes/createOrder.js')
const cors = require('cors')
mongoDB()
app.get("/", (req, res) => {
   res.send("t")
})
app.use(cors())
app.use(express.json())
//sending request to respective routes
app.use('/api', User)
app.use('/api', displayData)
app.use('/api', createOrder)

app.listen(port, () => {
   console.log('app is listening on port ' + port);

})