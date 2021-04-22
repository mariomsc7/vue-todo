/**
 * VUE TO DO LIST
 */

const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Fare i compiti',
                completed: false,
            },
            {
                text: 'Fare la spesa',
                completed: false,
            },
            {
                text: 'Fare il bucato',
                completed: false,
            },
        ],
        newTodo: '',
    },
    methods: {
        /**
         * Inserire una nuova to do nella lista
         */
        addTodo() {
            console.log('Added new task');

            if(this.newTodo !== '') {
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },

         /**
         * Inserire una nuova to do nella lista
         * 
         * @param {number} index posizione array di un oggetto todo
         */

        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        /**
         * Update todo completed status
         * 
         * @param {number} index posizione array di un oggetto todo
         */
        updateStatus(index) {
            this.todos[index].completed = ! this.todos[index].completed
        }
    }
});