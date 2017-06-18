import React, { Component } from 'react'


export default class Game extends Component {

  render() {
    let { deck } = this.props;

    return (
      <div className='card'>
        Deck {deck.length}
      </div>
    );
  }
}
