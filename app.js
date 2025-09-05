// Core Module
const path = require("path");

// External Module
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const databasepath =
  "mongodb+srv://vishwaspatel0305:Vishwas123@cluster0.b1csjsc.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

//Local Module
const todoitemRouter = require("./routes/todoitemRouters");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(rootDir, "public")));

app.use("/api/todo", todoitemRouter);

const PORT = 3000;
mongoose
  .connect(databasepath)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error in connecting to mongo", err);
  });
