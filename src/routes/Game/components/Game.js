import React, { Component } from 'react'
import { Link } from 'react-router'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Deck from './Deck'
import HandContainer from '../containers/HandContainer'


export default class Game extends Component {
  handleStartGameClick() {
    this.props.resetDeck();
    this.props.addPlayer();
    this.props.addPlayer();
    this.props.dealHands();
    this.props.setStage(1);
  }

  render() {
    let { deck } = this.props;
    let startButton = (this.props.stage === 0) ?
      <Button label='Start new game!' onClick={this.handleStartGameClick.bind(this)} /> : null;

    return (
      <Box>
        {startButton}
        <Deck deck={deck}/>
        <HandContainer />
      </Box>
    );
  }
}
