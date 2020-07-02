import React, { Component } from 'react'
import Notifications, { notify } from './index';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
`;

class success extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }
  }

  render() {
    return (
      <AppWrapper>
        <Container>
          <Notifications />
        </Container>
      </AppWrapper>
    )
  }
}

export default success
