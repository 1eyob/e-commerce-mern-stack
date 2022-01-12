const express = require("express");
const mongoose = require("mongoose");
const app =express();
const dotenv= require("dotenv");
const authRoute = require("./routes/auth");
const updateRoute =require("./routes/user");
const productRoute =require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const cors = require("cors");
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connected!"))
.catch((err)=> console.log(err));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", updateRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



app.listen(process.env.PORT || 5000, ()=>{
    console.log("server is running")
});