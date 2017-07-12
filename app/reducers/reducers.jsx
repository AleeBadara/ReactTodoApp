const uuid = require('node-uuid');
const moment = require('moment');

export let addTodoReducer = (todos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...todos,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix()
                }
            ];
        case 'TOGGLE_TODO':
            return todos.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
            });
        default:
            return todos;
    }
};

export let searchTextReducer = (searchText = '', action) => {
    switch (action.type) {
        case 'SEARCH_TEXT':
            return action.searchText;
        default:
            return searchText;
    }
};

export let showCompletedReducer = (showCompleted = false, action) => {
    switch (action.type) {
        case 'SHOW_COMPLETED':
            return !showCompleted;
        default:
            return showCompleted;
    }
};