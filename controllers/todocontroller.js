const todoitem = require("../models/todoitem");

exports.postitem = async (req, res, next) => {
  console.log(req.body);
  const { task, date } = req.body;
  const todoitems = new todoitem({ task, date });
  await todoitems.save();
  res.json(todoitems);
};

exports.getitem = async (req, res, next) => {
  const todoitems = await todoitem.find();
  res.json(todoitems);
};

exports.deleteitem = async (req, res, next) => {
  const { id } = req.params;
  const deleted = await todoitem.findByIdAndDelete(id);
  if (!deleted) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json({ id });
};

exports.completeitem = async (req, res, next) => {
  const { id } = req.params;
  const updateitem = await todoitem.findById(id);
  if (!updateitem) {
    return res.status(404).json({ error: "Item not found" });
  }
  updateitem.completed = !req.body.completed;
  await updateitem.save();
  res.json(updateitem);
};

exports.gettask = async (req, res, next) => {
  const { id } = req.params;
  const taskitem = await todoitem.findById(id);
  if (!taskitem) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(taskitem);
};

exports.updateitem = async (req, res, next) => {
  const { id } = req.params;
  const updateitem = await todoitem.findById(id);
  if (!updateitem) {
    return res.status(404).json({ error: "Item not found" });
  }
  updateitem.task = req.body.task || updateitem.task;
  updateitem.date = req.body.date || updateitem.date;
  await updateitem.save();
  res.json(updateitem);
};
