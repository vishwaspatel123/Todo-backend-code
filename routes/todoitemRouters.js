const express = require("express");
const todoitemRouter = express.Router();

const todocontroller = require("../controllers/todocontroller");

todoitemRouter.post("/", todocontroller.postitem);
todoitemRouter.get("/", todocontroller.getitem);
todoitemRouter.delete("/:id", todocontroller.deleteitem);
todoitemRouter.put("/:id/complete", todocontroller.completeitem);
todoitemRouter.get("/:id", todocontroller.gettask);
todoitemRouter.put("/:id/editing", todocontroller.updateitem);

module.exports = todoitemRouter;
