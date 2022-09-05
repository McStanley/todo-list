import todos from "./todos";

const projects = (() => {
    let projectList = [];
    let activeIndex;

    class Project {
        constructor(title) {
            this.title = title;
            this.todos = [];
            this.active = false;
        }
    }

    const init = () => {
        create('Home');
        // activate Home
        setActive(0);
    };

    const getList = () => projectList;

    const getActive = () => projectList[activeIndex];

    const create = (title) => {
        projectList.push(new Project(title));
    };

    const addTodo = (title, description) => {
        projectList[activeIndex].todos.push(todos.create(title, description));
    };

    const removeTodo = (index) => {
        projectList[activeIndex].todos.splice(index, 1);
    }

    const setActive = (index) => {
        projectList.forEach(project => {
            const indexMatch = projectList.indexOf(project) === index;
            project.active = indexMatch ? true : false;
        });

        activeIndex = index;
    };

    return {
        init,
        getList,
        getActive,
        create,
        addTodo,
        removeTodo,
        setActive,
    };
})();

export default projects;
