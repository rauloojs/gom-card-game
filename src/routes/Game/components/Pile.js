import React, { Component } from 'react'
import CardContainer from '../containers/CardContainer'


export default class Pile extends Component {

  render() {
    let { pile, top } = this.props;
    let topCard = (top) ? <CardContainer card={top} open={true}/> : null;

    return (
      <div>
        {topCard}
      </div>
    );
  }
}
