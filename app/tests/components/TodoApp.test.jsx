const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoApp = require('TodoApp');
describe('TodoApp.jsx', () => {
    it('should exists', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddNewTodo', () => {
        let todoText = 'test';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [] });
        todoApp.handleAddNewTodo(todoText);

        expect(todoApp.state.todos.length).toBe(1);
    });

    it('should toggle completed value when handleToggle called', () => {
        let todoOne = {
            id: 1,
            text: 'test',
            completed: false
        };
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [todoOne] });
        todoApp.handleToggle(1);

        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});