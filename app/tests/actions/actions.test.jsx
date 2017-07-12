const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        let action = {
            type: 'SEARCH_TEXT',
            searchText: 'Sport'
        }
        let result = actions.searchTextAction(action.searchText);
        expect(result).toEqual(action);
    });

    it('should generate add todo action', () => {
        let action = {
            type: 'ADD_TODO',
            text: 'Faire du sport'
        }
        let result = actions.addTodoAction(action.text);
        expect(result).toEqual(action);
    });

    it('should generate show completed action', () => {
        let action = {
            type: 'SHOW_COMPLETED'
        }
        let result = actions.showCompletedAction();
        expect(result).toEqual(action);
    });
});