const _ = require('underscore');
module.exports = {
    setTodos: function (todos) {
        if (_.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
        }
        return _.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        let filteredTodos = todos;
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        filteredTodos = filteredTodos.filter((todo) => {
            if (searchText) {
                return todo
                    .text.toLowerCase().includes(searchText);
            } else {
                return true;
            }
        });

        filteredTodos.sort((todo1, todo2) => {
            if (!todo1.completed && todo2.completed) {
                return -1;
            } else if (todo1.completed && !todo2.completed) {
                return 1;
            } else {
                return 0;
            }
        })
        return filteredTodos;
    }
};