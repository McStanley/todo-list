import projects from "./projects";

const dom = (() => {
    const init = () => {
        const projectInput = document.querySelector('#project-input');
        const btnSubmit = document.querySelector('#btn-submit');
        const btnReset = document.querySelector('#btn-reset')

        document.addEventListener('click', toggleProjectAdd);
        projectInput.addEventListener('keyup', submitProject);
        document.addEventListener('click', toggleForm);
        btnSubmit.addEventListener('click', submitTodo);
        btnReset.addEventListener('click', handleReset);
        showProjects();
        showTodos();
    };

    const showProjects = () => {
        const nav = document.querySelector('.nav');
        const projectList = projects.getList();

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
            showTodos();
        });

        return projectEl;
    };

    const showTodos = () => {
        const todoGrid = document.querySelector('#todo-grid');
        const todoList = projects.getActive().todos;

        todoGrid.replaceChildren();

        todoList.forEach(todo => {
            const index = todoList.indexOf(todo);

            todoGrid.appendChild(constructTodo(todo, index));
        });
    };

    const constructTodo = (todo, index) => {
        const todoEl = document.createElement('article');
        todoEl.classList.add('todo-card');
        todoEl.dataset.index = index;

        const titleEl = document.createElement('header');
        titleEl.classList.add('todo-title');
        titleEl.textContent = todo.title;
        todoEl.appendChild(titleEl);

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('todo-description');
        descriptionEl.textContent = todo.description;
        todoEl.appendChild(descriptionEl);

        const actionsEl = document.createElement('div');
        actionsEl.classList.add('todo-actions');

        const deleteEl = document.createElement('button');
        deleteEl.setAttribute('type', 'button');
        deleteEl.classList.add('todo-delete');
        deleteEl.textContent = 'Delete';
        actionsEl.appendChild(deleteEl);

        todoEl.appendChild(actionsEl);

        switch (todo.priority) {
            case 'low':
                todoEl.classList.add('priority-low');
                break;
            case 'mid':
                todoEl.classList.add('priority-mid');
                break;
            case 'high':
                todoEl.classList.add('priority-high');
                break;
        };

        deleteEl.addEventListener('click', () => {
            projects.removeTodo(index);
            showTodos();
        });

        return todoEl;
    };

    const toggleForm = (e) => {
        const formAdd = document.querySelector('#form-add');
        const btnSubmit = document.querySelector('#btn-submit');
        let target = e.target;

        while (target) {
            // btnSubmit is handled by function submitTodo
            if (target === btnSubmit) return;

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
        const index = projects.getList().length - 1;
        projects.setActive(index);

        showProjects();
        showTodos();
    };

    const submitTodo = () => {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const priority = document.querySelector('#priority');

        if (!title.value) {
            return;
        }
        if (!description.value) {
            return;
        }

        projects.addTodo(title.value, description.value, priority.value);

        // clear input fields
        title.value = '';
        description.value = '';
        priority.value = 'none';
        closeForm();
        showTodos();
    };

    const handleReset = () => {
        const proceed = confirm('Are you sure?');
        if (proceed) {
            projects.reset();
            showProjects();
            showTodos();
        }
    };

    return {
        init,
    };
})();

export default dom;
