const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoSearch = require('TodoSearch');
describe('TodoSearch.jsx', () => {
    it('should exists', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        todoSearch.refs.searchText.value = 'Go sport';
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Go sport');
    });

    it('should call onSearch with showCompleted equals to true', () => {
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });


});