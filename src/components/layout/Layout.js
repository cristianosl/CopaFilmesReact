import React from 'react';
import { Container } from '@material-ui/core';

export default class Layout extends React.Component {

  render() {
    return (
      <Container {...this.props}>
        {this.props.children}
      </Container>
    )
  }
}