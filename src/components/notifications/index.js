import React, { Component } from 'react'
import styled from 'styled-components';
import ee from 'event-emitter';

// Imported Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Container = styled.div`
  background-color: #0d8829;
  border-radius: 10px;
  color: white;
  padding: 16px;
  position: absolute;
  top: ${props => props.top}px;
  right: 16px;
  z-index: 999;
  transition: top 0.3s ease;
`;

const emitter = new ee();

export const notify = (msg) => {
  emitter.emit('notification', msg);
}

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: -100,
      msg: '',
    }

    this.timeout = null;

    emitter.on('notification', (msg) => {
      this.onShow(msg);
    });
  }

  onShow = (msg) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState({ top: -100 }, () => {
        this.timeout = setTimeout(() => {
          this.showNotification(msg);
        }, 500);
      });
    } else {
      this.showNotification(msg);
    }
  }

  showNotification = (msg) => {
    this.setState({
      top: 63,
      msg
    }, () => {
      this.timeout = setTimeout(() => {
        this.setState({
          top: -100,
        });
      }, 3000);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container top={this.state.top}>
          <CheckCircleIcon className="sidebar-item-icon"/>
          Profile successfuly saved!
        </Container>
      </React.Fragment>
    )
  }
}

export default index