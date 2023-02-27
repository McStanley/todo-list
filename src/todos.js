const todos = (() => {
  class Todo {
    constructor(id, title, description, priority) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.priority = priority;
    }
  }

  const create = (id, title, description, priority) =>
    new Todo(id, title, description, priority);

  return {
    create,
  };
})();

export default todos;
