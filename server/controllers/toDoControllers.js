const Models = require("../models/todo");
const handleError = (res, error) => {
  res.status(500).json({ error });
};
class toDoControllers {
  async getAll(req, res) {
    try {
      const data = await Models.ToDo.find();
      res.status(200).json(data);
    } catch (e) {
      console.log(e);
    }
  }
  async newToDo(req, res) {
    try {
      const { title, description, status } = req.body;

      const post = new Models.ToDo({ title, description, status });
      const data = await post.save();
      res.status(200).json(data);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteToDo(req, res) {
    try {

      const id = req.params.id;
      const data = await Models.ToDo.findByIdAndDelete(id);
      res.status(200).json(data);
    } catch (e) {
      console.log(e);
    }
  }
  async updateTuoDo(req, res) {
    try {

      const { _id, title, description, status } = req.body;
      const data = await Models.ToDo.findByIdAndUpdate(
        _id,
        {
          title,
          description,
          status,
        },
        {
          new: true,
        }
      );

      res.status(200).json(data);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new toDoControllers();
