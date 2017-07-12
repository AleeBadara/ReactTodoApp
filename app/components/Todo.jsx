const React = require('react');
const { Component } = require('react');
const moment = require('moment');
const { connect } = require('react-redux');
moment.locale('fr');
const actions = require('actions');

class Todo extends Component {
    render() {
        let { id, text, completed, createdAt, dispatch } = this.props;
        console.log(createdAt);
        let renderDate = function () {
            if (!completed) {
                return 'Créé le ' + moment(createdAt).format('Do MMM à HH:mm');
            }
        }

        return (
            <div className="todo" onClick={() => {
                dispatch(actions.toggleTodo(id));
            }} >
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="date">{renderDate()}</p>
                </div>
            </div>
        );
    }

}

module.exports = connect()(Todo);