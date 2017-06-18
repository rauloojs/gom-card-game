import React, { Component } from 'react'
import { Link } from 'react-router'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Deck from './Deck'
import HandContainer from '../containers/HandContainer'
import PileContainer from '../containers/PileContainer'


export default class Game extends Component {
  handleStartGameClick() {
    this.props.resetDeck();
    this.props.addPlayer();
    this.props.addPlayer();
    this.props.dealHands();
    this.props.setStage(1);
  }

  render() {
    let { deck, stage } = this.props;
    let startButton = null;
    let pile = null;

    switch (stage) {
      case 0:
        startButton = <Button label='Start new game!' onClick={this.handleStartGameClick.bind(this)} />;
        break;
      case 3:
        pile = <PileContainer />
        break;
    }

    return (
      <Box>
        {startButton}
        <Deck deck={deck}/>
        {pile}
        <HandContainer />
      </Box>
    );
  }
}
