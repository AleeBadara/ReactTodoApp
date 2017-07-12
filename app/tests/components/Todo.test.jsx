const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const Todo = require('Todo');
describe('Todo.jsx', () => {
    it('should exists', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle', () => {
        let todoOne = {
            id: 1,
            text: 'test',
            completed: false
        };
        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoOne} onToggle={spy} />);
        let $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(1);
    });
});