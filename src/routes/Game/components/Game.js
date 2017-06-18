import React, { Component } from 'react'
import { Link } from 'react-router'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Deck from './Deck'


export default class Game extends Component {
  handleStartGameClick() {
    this.props.resetDeck();
    this.props.addPlayer();
    this.props.addPlayer();
    this.props.dealHands();
  }

  render() {
    let { deck } = this.props;

    return (
      <Box>
        <Button label='Start new game!' onClick={this.handleStartGameClick.bind(this)}></Button>
        <Deck deck={deck}/>
      </Box>
    );
  }
}
