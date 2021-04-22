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
        addTodo() {
            console.log('add');
        }
    }
});