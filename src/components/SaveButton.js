import React, { Component } from 'react'
import Notifications, { notify } from './notifications/index';
import styled from 'styled-components';

// Imported Components
import Button from '@material-ui/core/Button';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
`;

class SaveButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }
  }

  render() {
    return (
      <div>
        <AppWrapper>
        <Container>
          <Notifications />
        </Container>
      </AppWrapper>
        <Button className="save-button" variant="contained" color="primary" onClick={() => notify('this is the save button')}>SAVE</Button>
      </div>
    )
  }
}

export default SaveButton