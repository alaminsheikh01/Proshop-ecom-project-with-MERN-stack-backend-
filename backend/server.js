import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

//database connection from config folder
connectDB();

app.get("/", (req, res) => {
  res.send("Hello");
});

//import routes from router forlder
app.use("/api/products", productRoutes);

app.use(notFound);

//error handeling
app.use(errorHandler);

//server listing port from .env file
const PORT = process.env.PORT || 2000;
app.listen(
  PORT,
  console.log(
    `backend server is running in ${process.env.NODE_ENV} on port ${PORT}`
      .yellow.bold
  )
);

/*app.get("/api/products", (req, res) => {
  res.json(products);
});

app.use((req, res, next) => {
  console.log("Hello");
  next();
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});*/
