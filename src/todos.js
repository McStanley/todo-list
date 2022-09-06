const todos = (() => {
    class Todo {
        constructor(title, description, priority) {
            this.title = title;
            this.description = description;
            this.priority = priority;
        }
    }

    const create = (title, description, priority) => new Todo(title, description, priority);

    return {
        create,
    };
})();

export default todos;
