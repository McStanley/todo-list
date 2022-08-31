const projects = (() => {
    let projectList = [];

    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
            this.active = false;
        }
    }

    const init = () => {
        create('Home');
        // activate Home
        setActive(0);
    };

    const get = () => projectList;

    const create = (title) => {
        projectList.push(new Project(title));
    };

    const setActive = (index) => {
        projectList.forEach(project => {
            const indexMatch = projectList.indexOf(project) === index;
            project.active = indexMatch ? true : false;
        });
    };

    return {
        init,
        get,
        create,
        setActive,
    };
})();

export default projects;
