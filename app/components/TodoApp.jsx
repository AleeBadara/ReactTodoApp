const React = require('react');
const { HashRouter, Route, NavLink } = require('react-router-dom');
const PropTypes = require('prop-types');
const uuid = require('node-uuid');
const moment = require('moment');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const TodoApi = require('TodoApi');
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddNewTodo = this.handleAddNewTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoApi.getTodos()
        }
    }
    componentDidUpdate() {
        TodoApi.setTodos(this.state.todos);
    }

    handleAddNewTodo(todoText) {
        let newTodo = {
            id: uuid(),
            text: todoText,
            completed: false,
            createdAt: moment().unix()
        };
        let newTodos = [...this.state.todos, newTodo];
        this.setState(
            {
                todos: newTodos
            }
        );
    }
    handleSearch(showCompleted, searchText) {
        this.setState(
            {
                showCompleted: showCompleted,
                searchText: searchText.toLowerCase()
            }
        )
    }
    render() {
        let { showCompleted, searchText, todos } = this.state;
        let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList />
                            <AddTodo onAddNewTodo={this.handleAddNewTodo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


module.exports = TodoApp;