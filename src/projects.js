import { auth, db } from './firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  getDocs,
  writeBatch,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import todos from './todos';
import dom from './dom';

const projects = (() => {
  let projectList = [];
  let activeID = null;

  class Project {
    constructor(id, title) {
      this.id = id;
      this.title = title;
      this.todos = [];

      // get a reference to the 'notes' collection for this project
      const user = auth.currentUser;
      this.todosRef = collection(
        db,
        'users',
        user.uid,
        'projects',
        this.id,
        'todos'
      );

      // listen for changes in the 'todos' collection
      onSnapshot(this.todosRef, (querySnapshot) => {
        this.todos = [];

        querySnapshot.forEach((doc) => {
          const newTodo = todos.create(
            doc.id,
            doc.data().title,
            doc.data().description,
            doc.data().priority
          );
          this.todos.push(newTodo);
        });

        // update the UI to show the new todo list
        dom.update();
      });
    }
  }

  const init = () => {
    // get a reference to the 'projects' collection for the current user
    const user = auth.currentUser;
    const projectsRef = collection(db, 'users', user.uid, 'projects');

    // load the projects from the Firestore collection and listen for changes
    onSnapshot(projectsRef, (querySnapshot) => {
      // clear the current project list
      projectList = [];

      // loop through each project document in the collection
      querySnapshot.forEach((doc) => {
        // create a new project object and add it to the project list
        const project = new Project(doc.id, doc.data().title);
        projectList.push(project);
      });

      // sort the project list by title
      projectList.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return titleA < titleB ? -1 : 1;
      });

      // update the UI to show the new project list
      dom.update();
    });
  };

  const reset = async () => {
    const user = auth.currentUser;
    const projectsRef = collection(db, 'users', user.uid, 'projects');
    const batch = writeBatch(db);

    try {
      const snapshot = await getDocs(projectsRef);

      snapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();

      create('Home');
    } catch (error) {
      console.error('Error deleting projects:', error);
    }
  };

  const getList = () => projectList;

  const getActive = () => {
    const activeProject = projectList.find(
      (project) => project.id === getActiveID()
    );
    return activeProject || projectList[0];
  };

  const getActiveID = () => activeID || projectList[0].id;

  const create = async (title) => {
    try {
      const user = auth.currentUser;
      const projectsRef = collection(db, 'users', user.uid, 'projects');
      const newProjectRef = await addDoc(projectsRef, { title: title });

      setActive(newProjectRef.id);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const remove = async (id) => {
    const userID = auth.currentUser.uid;
    const projectsRef = collection(db, 'users', userID, 'projects');
    const projectRef = doc(projectsRef, id);

    try {
      await deleteDoc(projectRef);
    } catch (error) {
      console.error('Error removing document: ', error);
    }

    setActive(projectList[0]?.id || null);
  };

  const addTodo = async (title, description, priority) => {
    const user = auth.currentUser;
    const projectId = getActive().id;
    const todosRef = collection(
      db,
      'users',
      user.uid,
      'projects',
      projectId,
      'todos'
    );

    const newTodo = {
      title: title,
      description: description,
      priority: priority,
    };

    await addDoc(todosRef, newTodo);
  };

  const removeTodo = async (id) => {
    const userID = auth.currentUser.uid;
    const projectID = getActive().id;
    const todosRef = collection(
      db,
      'users',
      userID,
      'projects',
      projectID,
      'todos'
    );
    const todoRef = doc(todosRef, id);

    try {
      await deleteDoc(todoRef);
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  const updateTodo = async (id, title, description, priority) => {
    const userID = auth.currentUser.uid;
    const projectID = getActive().id;
    const todosRef = collection(
      db,
      'users',
      userID,
      'projects',
      projectID,
      'todos'
    );
    const todoRef = doc(todosRef, id);

    const updatedTodo = {
      title,
      description,
      priority,
    };

    try {
      await updateDoc(todoRef, updatedTodo);
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const setActive = (id) => {
    activeID = id;
    dom.update();
  };

  return {
    init,
    reset,
    getList,
    getActive,
    getActiveID,
    create,
    remove,
    addTodo,
    removeTodo,
    updateTodo,
    setActive,
  };
})();

export default projects;
