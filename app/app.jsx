const React = require('react');
const ReactDOM = require('react-dom');
const redux = require('redux');
const { Provider } = require('react-redux');

const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
    let state = store.getState();
    console.log(state);
});

store.dispatch(actions.addTodoAction('Aller manger'));

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load Css
require('style-loader!css-loader!sass-loader!ApplicationStyles');



ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);