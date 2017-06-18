import React, { Component } from 'react'
import Button from 'grommet/components/Button'

const compareCards = (top, card) => {
  if (!top || top.value === '2' || top.value === '3') {
    return true;
  }

  switch (card.value) {
    case 'A':
    case '2':
    case '10':
      return true;
      break;
    default:
      return card.realValue >= top.realValue;
  }
  return false;
}


export default class Card extends Component {
  handlePutClick() {
    this.props.putCard(this.props.index);
  }
  handlePlayClick() {
    this.props.playCard(this.props.index);
  }

  render() {
    let { card, open, stage, isHandCard, top } = this.props;
    let body = (open) ? card.suit + ' ' + card.value : null;
    let button = null;

    switch (stage) {
      case 2:
        if (isHandCard) {
          button = <Button label={'Put'} onClick={this.handlePutClick.bind(this)} />
        }
        break;
      case 3:
        if (isHandCard && compareCards(top, card)) {
          button = <Button label={'Play'} onClick={this.handlePlayClick.bind(this)} />
        }
        break;
    }

    return (
      <span className='card'>
        {body}
        {button}
      </span>
    );
  }
}
