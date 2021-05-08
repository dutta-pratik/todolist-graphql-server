# todolist-graphql-server

A todo-list server made using apollo-server-express. 
The purpose of this server is to help fast-forward the process of implelmenting various frontend using this as a boilerplate server.

# Steps to setup the server

1. clone this repo
2. npm install
3. currently using mongoDB as a database. You can create your own cluster using [mongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and replace the variable present in _config/mongoose.js_ file with the credentials received while creating cluster.
4. run _npm run dev-server_

and that's it...

# Functions available

* List all tasks 
  * function name: allTasks
    * returns all tasks
* Delete a task
  * function name: deleteTask(_id:ID!) 
    * return the deleted task
* Create a task
  * function name: createTask(taskDesc:String!) 
    *  return the created task
