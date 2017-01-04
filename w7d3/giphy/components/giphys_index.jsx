import React, { Component } from 'react';
// import GiphyIndexItem from './giphys_index_items';

const GiphyIndexItem = ({gif}) => (
  <li >
    <img src={gif.images.fixed_height.url}></img>
  </li>
);

class GiphysIndex extends Component {

  render() {
    const gifs = this.props.giphys.map((gifObj, idx) => <GiphyIndexItem gif={gifObj} key={idx}/>);
    return (
      <ul>
        {gifs}
      </ul>
    );
  }
}

export default GiphysIndex;
