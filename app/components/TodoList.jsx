const React = require('react');
const { Component } = require('react');
const { connect } = require('react-redux');

const Todo = require('Todo');
class TodoList extends Component {
    render() {
        let { todos } = this.props;
        let renderTodos = () => {
            if (todos.length === 0) {
                return <p className="container__message">Aucune tâche</p>
            }
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} />
                )
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

module.exports = connect((state) => {
    return {
        todos: state.todos
    };
})(TodoList);