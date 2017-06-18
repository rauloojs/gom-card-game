import React, { Component } from 'react'
import Button from 'grommet/components/Button'


export default class Card extends Component {
  handlePutClick() {
    this.props.putCard(this.props.index);
  }

  render() {
    let { card, open, stage } = this.props;
    let body = (open) ? card.suit + ' ' + card.value : null;
    let putButton = null;

    switch (stage) {
      case 2:
        putButton = <Button label={'Put'} onClick={this.handlePutClick.bind(this)} />
        break;
    }

    return (
      <span className='card'>
        {body}
        {putButton}
      </span>
    );
  }
}
