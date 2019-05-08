/**
 * A fake todo service for mocking the real one.
 */
export default class FakeService {
  constructor(todos) {
    this.todos = todos ? todos : [];
  }
  async getTodos() {
    return this.todos;
  }

  async addTodo(name) {
    return {
      id: 4,
      name
    };
  }

  async deleteTodo(id) {
    return true;
  }

  async updateTodo(id, name) {
    return {
      id,
      name
    };
  }
}
