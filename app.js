// Core Module
const path = require("path");

// External Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// MongoDB connection stringS
const databasepath =
  "mongodb+srv://vishwaspatel0305:Vishwas123@cluster0.b1csjsc.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

// Local Modules
const todoitemRouter = require("./routes/todoitemRouters");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(rootDir, "public")));

app.use("/api/todo", todoitemRouter);

// ✅ Use Render's PORT
const PORTs = process.env.PORT || 3000;

mongoose
  .connect(databasepath)
  .then(() => {
    app.listen(PORTs, () => {
      console.log(`Server running on http://localhost:${PORTs}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
