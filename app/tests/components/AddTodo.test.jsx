const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const AddTodo = require('AddTodo');
describe('AddTodo.jsx', () => {
    it('should exists', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddNewTodo', () => {
        let spy = expect.createSpy();
        let addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddNewTodo={spy} />);
        let $el = $(ReactDOM.findDOMNode(addTodoForm));
        addTodoForm.refs.todoText.value = 'Go sport';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalled();
    });

    it('should not call onAddNewTodo', () => {
        let spy = expect.createSpy();
        let addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddNewTodo={spy} />);
        let $el = $(ReactDOM.findDOMNode(addTodoForm));
        addTodoForm.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});