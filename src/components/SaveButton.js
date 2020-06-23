import React, { Component } from 'react'

// Imported Components
import Button from '@material-ui/core/Button';

class SaveButton extends Component {
  render() {
    return (
      <div>
        <Button className="save-button" variant="contained" color="primary">SAVE</Button>
      </div>
    )
  }
}

export default SaveButton