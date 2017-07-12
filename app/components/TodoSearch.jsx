const React = require('react');
const { Component } = require('react');

class TodoSearch extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch() {
        let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    }
    render() {
        return (
            <div className="container__header">
                <div >
                    <input type="text" ref="searchText" onChange={this.handleSearch} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
                        Afficher les tâches effectuées.
                    </label>
                </div>
            </div>
        );
    }
}

module.exports = TodoSearch;
