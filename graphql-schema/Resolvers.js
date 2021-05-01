const fakeData = require("../demoTasks");
const TaskModel = require("../models/Task");

const resolvers = {
  Query: {
    allTasks() {
      const tasks = TaskModel.find();
      return tasks;
    },
  },

  Mutation: {
    async createTask(parent, args) {
      const task = await TaskModel.create(args);
      const { _id, taskDesc, createdAt } = task;
      const taskData = { _id, taskDesc, createdAt };
      return taskData;
    },
    async deleteTask(parent, args) {
      const deletedTask = await TaskModel.findOneAndDelete(args);
      return deletedTask;
    },
  },
};

module.exports = { resolvers };
