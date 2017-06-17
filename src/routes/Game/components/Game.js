import React, { Component } from 'react'
import { Link } from 'react-router'
import Box from 'grommet/components/Box'
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import ListHeader from './ListHeader'
import FlowDetail from './FlowDetail'


export default class FlowsList extends Component {
  componentWillMount() {
    this.props.getFLowsList();
  }
  render() {
    let { flows } = this.props;
    let rows = flows.map((flow, key) => {
      let { id, name, version, publish_status } = flow;
      return (
        <AccordionPanel key={key} heading={<span>{flow.name}</span>}>
          <FlowDetail flow={flow} />
        </AccordionPanel>
      )
    });

    return (
      <div>
        <ListHeader />
        <Box direction='column' responsive={false} align='center' pad='small'>
          <section style={{width: '100%'}}>
            <Accordion>
              {rows}
            </Accordion>
          </section>
        </Box>
      </div>
    );
  }
}
