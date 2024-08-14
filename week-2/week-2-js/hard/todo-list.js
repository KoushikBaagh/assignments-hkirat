/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todo
    - remove(indexOfTodo): remove todo from list of todo
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todo
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todo

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todo) {
    this.todo = [];
  }

  add(todo) {
    this.todo.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
      this.todo.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todo.length) {
      this.todo[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
      return this.todo[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todo = [];
  }
}
const todo = new Todo();
module.exports = Todo;
