const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoList = require('TodoList');
const Todo = require('Todo');
describe('TodoList.jsx', () => {
    it('should exists', () => {
        expect(TodoList).toExist();
    });

    it('should render 1 Todo component for each todo item', () => {
        let todos = [
            {
                id: 1,
                text: 'One'
            },
            {
                id: 2,
                text: 'Two'
            }
        ];

        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });
});