import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
//event handler to update search term with user's input
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }
//event handler to search Spotify with user's term
  handleSearch(event) {
    this.props.onSearch(this.state.term);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
