const redux = require('redux');
const { addTodoReducer, searchTextReducer, showCompletedReducer } = require('reducers');

export let configure = () => {
    let reducer = redux.combineReducers({
        showCompleted: showCompletedReducer,
        searchText: searchTextReducer,
        todos: addTodoReducer
    });

    let store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
