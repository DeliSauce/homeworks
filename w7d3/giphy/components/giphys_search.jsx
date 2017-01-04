import React, { Component } from 'react';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchTerm: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
    this.setState({searchTerm: ""});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type="text"
            value={this.state.searchTerm}
            placeholder="boxer in bikini"
            onChange={this.handleChange}>
          </input>

          <button> Search Giphy </button>

        </form>
        <GiphysIndex giphys={this.props.giphys}/>

      </div>
    );
  }
}

export default GiphysSearch;
