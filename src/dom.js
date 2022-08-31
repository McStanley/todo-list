import projects from "./projects";

const dom = (() => {
    const init = () => {
        const projectInput = document.querySelector('#project-input');

        document.addEventListener('click', toggleProjectAdd);
        projectInput.addEventListener('keyup', submitProject);
        document.addEventListener('click', toggleForm);
        showProjects();
    };

    const showProjects = () => {
        const nav = document.querySelector('.nav');
        const projectList = projects.get();

        nav.replaceChildren();

        projectList.forEach(project => {
            // get position of project in the array
            const index = projectList.indexOf(project);

            nav.appendChild(constructProject(project, index));
        });
    };

    const constructProject = (project, index) => {
        const projectEl = document.createElement('div');
        projectEl.setAttribute('role', 'button');
        projectEl.classList.add('btn-nav');
        projectEl.dataset.index = index;
        projectEl.textContent = project.title;

        if (project.active) {
            projectEl.classList.add('active');
        }

        projectEl.addEventListener('click', () => {
            projects.setActive(index);
            showProjects();
        });

        return projectEl;
    };

    const toggleForm = (e) => {
        const formAdd = document.querySelector('#form-add');
        const btnSubmit = document.querySelector('#btn-submit');
        let target = e.target;

        while (target) {
            if (target === btnSubmit) {
                // check if input data is valid
                // if yes then submit
                return;
            }
            if (target === formAdd) {
                openForm();
                return;
            }
            // go up the DOM
            target = target.parentNode;
        }
        closeForm();
    };

    const openForm = () => {
        const title = document.querySelector('#title');
        const formActions = document.querySelector('#form-actions');

        title.classList.remove('hidden');
        formActions.classList.remove('hidden');
    };

    const closeForm = () => {
        const title = document.querySelector('#title');
        const formActions = document.querySelector('#form-actions');

        title.classList.add('hidden');
        formActions.classList.add('hidden');
    };

    const toggleProjectAdd = (e) => {
        const projectAdd = document.querySelector('#project-add');
        let target = e.target;

        while (target) {
            if (target === projectAdd) {
                openProjectAdd();
                return;
            }
            // go up the DOM
            target = target.parentNode;
        }
        closeProjectAdd();
    };

    const openProjectAdd = () => {
        const projectText = document.querySelector('#project-text');
        const projectInput = document.querySelector('#project-input');

        projectText.classList.add('hidden');
        projectInput.classList.remove('hidden');
        projectInput.focus();
    };

    const closeProjectAdd = () => {
        const projectText = document.querySelector('#project-text');
        const projectInput = document.querySelector('#project-input');

        projectText.classList.remove('hidden');
        projectInput.classList.add('hidden');

        projectInput.value = '';
    };

    const submitProject = (e) => {
        const projectInput = document.querySelector('#project-input');

        // check if enter was pressed
        if (e.key !== 'Enter') return;
        // check if user passed a value
        if (!projectInput.value) return;

        projects.create(projectInput.value);
        closeProjectAdd();

        // set newly created project to active
        const index = projects.get().length - 1;
        projects.setActive(index);

        showProjects();
    };

    return {
        init,
    };
})();

export default dom;
