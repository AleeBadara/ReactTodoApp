const expect = require('expect');
const reducers = require('reducers');
const moment = require('moment');

describe('SearchTextReducer', () => {
    it('should return the new search text', () => {
        let action = {
            type: 'SEARCH_TEXT',
            searchText: 'Sport'
        };

        let result = reducers.searchTextReducer(undefined, action);
        expect(result).toEqual(action.searchText);
    });
});

describe('AddTodoReducer', () => {
    it('should add a new todo', () => {
        let action = {
            type: 'ADD_TODO',
            text: 'Faire du sport'
        };

        let result = reducers.addTodoReducer(undefined, action);
        expect(result.length).toBe(1);
        expect(result[0].text).toEqual(action.text);
    });

    it('should toggle a todo', () => {
        let todos = [{
            id: '101',
            text: 'Faire du sport',
            completed: false,
            createdAt: moment().unix()
        }];
        let action = {
            type: 'TOGGLE_TODO',
            id: '101'
        };

        let result = reducers.addTodoReducer(todos, action);
        expect(result[0].completed).toEqual(true);
    });
});

describe('ShowCompletedReducer', () => {
    it('should toggle show completed', () => {
        let action = {
            type: 'SHOW_COMPLETED'
        };

        let result = reducers.showCompletedReducer(false, action);
        expect(result).toEqual(true);
    });
});


