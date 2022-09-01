const todos = (() => {
    class Todo {
        constructor(title, description) {
            this.title = title;
            this.description = description;
        }
    }

    const create = (title, description) => new Todo(title, description);

    return {
        create,
    };
})();

export default todos;
