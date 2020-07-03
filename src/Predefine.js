import React from 'react'
// import styled from 'styled-components';

// Imported Components
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Predefine() {
  return (
    <Container>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={4}>
          <Paper elevation={3} className="predefined-profiles">
            <img src="https://via.placeholder.com/300" className="predefine-img" alt=""/>
            <Button className="download-button" variant="contained" color="primary">
              DOWNLOAD
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className="predefined-profiles">
            <img src="https://via.placeholder.com/300" className="predefine-img" alt=""/>
            <Button className="download-button" variant="contained" color="primary">
              DOWNLOAD
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className="predefined-profiles">
            <img src="https://via.placeholder.com/300" className="predefine-img" alt=""/>
            <Button className="download-button" variant="contained" color="primary">
              DOWNLOAD
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
