const User = require("./User")
const Todo = require("./Todo")

User.hasMany(Todo);
Todo.belongsTo(User);

module.exports = {
    User,
    Todo
}