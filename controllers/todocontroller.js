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

exports.updateitem = async (req, res, next) => {
  const { id } = req.params;
  const updateitem = await todoitem.findById(id);
  if (!updateitem) {
    return res.status(404).json({ error: "Item not found" });
  }
  updateitem.completed =
    req.body.completed !== undefined ? req.body.completed : true;
  await updateitem.save();
  res.json(updateitem);
};
