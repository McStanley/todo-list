const dom = (() => {
    const init = () => {

        document.addEventListener('click', toggleForm);
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
    }

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
    }

    return {
        init,
    }
})();

export default dom;
