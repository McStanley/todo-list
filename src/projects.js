import todos from "./todos";

const projects = (() => {
    let projectList = [];

    class Project {
        constructor(title) {
            this.title = title;
            this.todos = [];
            this.active = false;
        }
    }

    const init = () => {
        // attempt to load projects from localStorage
        projectList = load();

        if (!projectList) reset();
    };

    const reset = () => {
        // turn projectList into array
        projectList = [];
        create('Home');
        // activate Home
        setActive(0);
    };

    const getList = () => projectList;

    const getActive = () => projectList[getActiveIndex()];

    const getActiveIndex = () => projectList.findIndex(project => project.active);

    const create = (title) => {
        projectList.push(new Project(title));
        save();
    };

    const addTodo = (title, description) => {
        projectList[getActiveIndex()].todos.push(todos.create(title, description));
        save();
    };

    const removeTodo = (index) => {
        projectList[getActiveIndex()].todos.splice(index, 1);
        save();
    }

    const setActive = (index) => {
        projectList.forEach(project => {
            const indexMatch = projectList.indexOf(project) === index;
            project.active = indexMatch ? true : false;
        });

        save();
    };

    const save = () => {
        localStorage.setItem('projects', JSON.stringify(projectList));
    };

    const load = () => JSON.parse(localStorage.getItem('projects'));

    return {
        init,
        reset,
        getList,
        getActive,
        create,
        addTodo,
        removeTodo,
        setActive,
    };
})();

export default projects;
