export let searchTextAction = (searchText) => {
    return {
        type: 'SEARCH_TEXT',
        searchText
    };
};

export let addTodoAction = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

export let showCompletedAction = () => {
    return {
        type: 'SHOW_COMPLETED'
    };
};

export let toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};