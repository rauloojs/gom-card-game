import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import App from 'grommet/components/App';


export const PageLayout = ({ children }) => (
  <App className='gom-app' centered={false}>
    <div>
      {children}
    </div>
  </App>
);

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
