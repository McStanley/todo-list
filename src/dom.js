import projects from './projects';
import { handleLogin, handleLogout, auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const dom = (() => {
  const init = () => {
    const projectInput = document.querySelector('#project-input');
    const btnSubmit = document.querySelector('#btn-submit');
    const btnReset = document.querySelector('#btn-reset');
    const btnSave = document.querySelector('#btn-save');
    const overlay = document.querySelector('#overlay');
    const btnLogin = document.querySelector('#btn-login');
    const btnLogout = document.querySelector('#btn-logout');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main');

    document.addEventListener('click', toggleProjectAdd);
    projectInput.addEventListener('keyup', submitProject);
    document.addEventListener('click', toggleForm);
    btnSubmit.addEventListener('click', submitTodo);
    btnReset.addEventListener('click', handleReset);
    btnSave.addEventListener('click', saveTodo);
    overlay.addEventListener('click', closePopup);
    btnLogin.addEventListener('click', handleLogin);
    btnLogout.addEventListener('click', handleLogout);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        btnLogin.classList.add('hidden');
        btnLogout.classList.remove('hidden');
        sidebar.classList.remove('hidden');
        main.classList.remove('hidden');

        projects.init();
      } else {
        // User is signed out
        btnLogin.classList.remove('hidden');
        btnLogout.classList.add('hidden');
        sidebar.classList.add('hidden');
        main.classList.add('hidden');

        update();
      }
    });
  };

  const showProjects = () => {
    const nav = document.querySelector('.nav');
    const projectList = projects.getList();

    nav.replaceChildren();

    projectList.forEach((project) => {
      nav.appendChild(constructProject(project));
    });
  };

  const constructProject = (project) => {
    const projectEl = document.createElement('div');
    projectEl.setAttribute('role', 'button');
    projectEl.classList.add('btn-nav');
    projectEl.dataset.id = project.id;
    projectEl.textContent = project.title;

    if (project.id === projects.getActiveID()) {
      projectEl.classList.add('active');
    }

    projectEl.addEventListener('click', () => {
      projects.setActive(project.id);
    });

    return projectEl;
  };

  const showTodos = () => {
    const todoGrid = document.querySelector('#todo-grid');
    const todoList = projects.getActive()?.todos ?? [];

    todoGrid.replaceChildren();

    todoList.forEach((todo) => {
      todoGrid.appendChild(constructTodo(todo));
    });
  };

  const constructTodo = (todo) => {
    const todoEl = document.createElement('article');
    todoEl.classList.add('todo-card');
    todoEl.dataset.id = todo.id;

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
    }

    todoEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('todo-delete')) return;
      openPopup(todo);
    });

    deleteEl.addEventListener('click', () => {
      projects.removeTodo(todo.id);
    });

    return todoEl;
  };

  const openPopup = (todo) => {
    const overlay = document.querySelector('#overlay');
    const popupCard = document.querySelector('#popup-card');
    const popupTitle = document.querySelector('#popup-title');
    const popupDescription = document.querySelector('#popup-description');
    const popupPriority = document.querySelector('#popup-priority');

    popupTitle.value = todo.title;
    popupDescription.value = todo.description;
    popupPriority.value = todo.priority;
    popupCard.dataset.id = todo.id;

    overlay.classList.remove('hidden');
    popupCard.classList.remove('hidden');
  };

  const closePopup = () => {
    const overlay = document.querySelector('#overlay');
    const popupCard = document.querySelector('#popup-card');

    overlay.classList.add('hidden');
    popupCard.classList.add('hidden');
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
  };

  const submitTodo = () => {
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const priority = document.querySelector('#priority');

    if (!title.value && !description.value) {
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

  const saveTodo = () => {
    const id = document.querySelector('#popup-card').dataset.id;
    const title = document.querySelector('#popup-title');
    const description = document.querySelector('#popup-description');
    const priority = document.querySelector('#popup-priority');

    if (!title.value && !description.value) {
      return;
    }

    projects.updateTodo(id, title.value, description.value, priority.value);

    // clear input fields
    title.value = '';
    description.value = '';
    priority.value = 'none';
    closePopup();
  };

  const handleReset = () => {
    const proceed = confirm('Are you sure?');
    if (proceed) {
      projects.reset();
    }
  };

  const update = () => {
    showProjects();
    showTodos();
  };

  return {
    init,
    update,
  };
})();

export default dom;
