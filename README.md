# todolist-graphql-server

A todo-list server made using apollo-server-express. 
The purpose of this server is to help fast-forward the process of implelmenting various frontend using this as a boilerplate server.

using mongoDB as a database.
you can create your own cluster using [mongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and replace the variable present in _config/mongoose.js_ file with that credentials.

# Functions available

- list all tasks 
  *allTasks : returns all tasks
- delete a task
  *deleteTask(_id:ID!) : return the deleted task
- create a task
  *createTask(taskDesc:String!) : return the created task
