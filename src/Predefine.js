import React from 'react'
// import styled from 'styled-components';
import { BrowserRouter, Route, Link } from "react-router-dom";

// Imported Icons and Images
import GetAppIcon from '@material-ui/icons/GetApp';
import predefineWatch from './img/predefine-watch.png';

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
          <Paper elevation={3} className="predefine-profiles">
            <img src={predefineWatch} className="predefine-img" alt=""/>
            <Link to="/garden">
              <Button className="download-button" variant="contained" color="primary">
                DOWNLOAD
                <GetAppIcon className="download-icon"/>
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className="predefine-profiles">
            <img src={predefineWatch} className="predefine-img" alt=""/>
            <Link to="/mikro">
              <Button className="download-button" variant="contained" color="primary">
                DOWNLOAD
                <GetAppIcon className="download-icon"/>
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className="predefine-profiles">
            <img src={predefineWatch} className="predefine-img" alt=""/>
            <Link to="/selfcomplete">
              <Button className="download-button" variant="contained" color="primary">
                DOWNLOAD
                <GetAppIcon className="download-icon"/>
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
