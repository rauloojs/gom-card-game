import React, { Component } from 'react'
import Button from 'grommet/components/Button'
import CardContainer from '../containers/CardContainer'


export default class Hand extends Component {
  handlePickCardsClick() {
    this.props.pickCards();
    this.props.setStage(2);
  }
  handleContinueClick() {
    // this.props.playerReady();
    this.props.setStage(3);
  }

  render() {
    let { hand, stage } = this.props;
    let component = null;
    let pickButton = null;
    let continueButton = null;

    switch(stage) {
      case 1:
        pickButton = <Button label='Pick cards' onClick={this.handlePickCardsClick.bind(this)}/>;
        break;
      case 2:
        if (hand.openCards.length === 3) {
          continueButton = <Button label='Continue' onClick={this.handleContinueClick.bind(this)}/>
        }
        break;
    }


    if (hand) {
      component = (
        <div>
          <h3>Set cards</h3>
          {hand.setCards.map((card, index) => {
            return <CardContainer index={index} key={index} card={card} open={false}/>
          })}
          <h3>Open cards</h3>
          {hand.openCards.map((card, index) => {
            return <CardContainer index={index} key={index} card={card} open={true}/>
          })}
          <h3>Hand cards</h3>
          {hand.handCards.map((card, index) => {
            return <CardContainer index={index} key={index} card={card} open={true}/>
          })}
          {pickButton}
          {continueButton}
        </div>
      )
    }

    return component;
  }
}
