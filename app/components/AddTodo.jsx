const React = require('react');
const { Component } = require('react');
const PropTypes = require('prop-types');

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.addNewTodo = this.addNewTodo.bind(this);
    }
    addNewTodo(e) {
        e.preventDefault();
        let todoText = this.refs.todoText.value;
        this.refs.todoText.value = '';
        if (todoText) {
            this.props.onAddNewTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    }
    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.addNewTodo}>
                    <input type="text" ref="todoText" placeholder='Nouvelle tâche' />
                    <button className="button expanded">Ajouter</button>
                </form>
            </div>
        );
    }
}

AddTodo.PropTypes = {
    onAddNewTodo: PropTypes.func
}

module.exports = AddTodo;