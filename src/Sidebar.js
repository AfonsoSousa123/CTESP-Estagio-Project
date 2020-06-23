import React from 'react';
import Grid from '@material-ui/core/Grid';

// Imported Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import WatchIcon from '@material-ui/icons/Watch';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import TimerIcon from '@material-ui/icons/Timer';

// Imported Components
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ListItem from '@material-ui/core/ListItem';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

function Sidebar() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="sidebar">
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <ListItem className="sidebar-header">
            <WatchLaterIcon className="sidebar-item-icon" /> 
            Watch Types
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid justify="center" container spacing={3}>
            <Grid justify="center" item xs={6}>
              <Button>Digital</Button>
            </Grid>
            <Grid justify="center" item xs={6}>
              <Button>Analog</Button>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <ListItem className="sidebar-header">
            <WatchIcon className="sidebar-item-icon" />
            Watch Colors
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="sidebar-item-content">
            <Grid container spacing={3}>
              <Grid justify="center" item xs={8}>
                <p className="sidebar-item">Background Colors</p>
              </Grid>
              <Grid justify="center" item xs={4}>
                <input className="color-input" type="color" name="background color" id=""/>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={8}>
                <p className="sidebar-item">Digital</p>
              </Grid>
              <Grid justify="center" item xs={4}>
                <input className="color-input" type="color" name="digital" id=""/>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={8}>
                <p className="sidebar-item">Analog Hours</p>
              </Grid>
              <Grid justify="center" item xs={4}>
                <input className="color-input" type="color" name="analogHours" id=""/>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={8}>
                <p className="sidebar-item">Analog Minutes</p>
              </Grid>
              <Grid justify="center" item xs={4}>
                <input className="color-input" type="color" name="analogMinutes" id=""/>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={8}>
                <p className="sidebar-item">Analog Seconds</p>
              </Grid>
              <Grid justify="center" item xs={4}>
                <input className="color-input" type="color" name="analogSeconds" id=""/>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={8}>
                <p className="sidebar-item">Center Dot</p>
              </Grid>
              <Grid justify="center" item xs={4}>
                <input className="color-input" type="color" name="centerDot" id=""/>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <ListItem className="sidebar-header">
            <TimerIcon className="sidebar-item-icon" />
            Line
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="sidebar-item-content">
            <Grid justify="center" container spacing={3}>
              <Grid justify="center" item xs={5}>
                <Button variant="contained" color="primary">Add Line</Button>
              </Grid>
              <Grid justify="center" item xs={7}>  
                <Button variant="contained" color="secondary">Remove Line</Button>
              </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={6}>
                <FormControl variant="filled" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">Bar</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    {/* <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid justify="center" item xs={6}>
                <InputLabel>Color</InputLabel>
                <input type="color" className="color-input" name="lineColor" id=""/>
              </Grid>
            </Grid>
            <br/>
            <br/>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <h5 className="sidebar-item">Bar 1 Settings</h5>
                <br/>
                <FormControl variant="filled" fullWidth>
                  <InputLabel>Steps Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem default value={1}>Current Steps</MenuItem>
                    <MenuItem value={2}>Yesterday Steps</MenuItem>
                    <MenuItem value={3}>Companion Steps</MenuItem>
                    <MenuItem value={4}>Past Hour Activity</MenuItem>
                    <MenuItem value={5}>Goal Activity</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <FormControl variant="filled" fullWidth>
                  <p className="sidebar-item">Circle Bar 1 Size</p>
                  <Slider defaultValue={100} aria-labelledby="continuous-slider" /> 
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <FormControl variant="filled" fullWidth>
                  <p className="sidebar-item">Circle Bar 1 Radius</p>
                  <Slider defaultValue={100} aria-labelledby="continuous-slider" /> 
                </FormControl>
              </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <h5 className="sidebar-item">Bar 1 Start</h5>
                <br/>
                <FormControl variant="filled" fullWidth>
                  <InputLabel>Start Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value={1}>Top Half</MenuItem>
                    <MenuItem value={2}>Full</MenuItem>
                    <MenuItem value={3}>Bottom Half</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <h5 className="sidebar-item">Bar 1 Rotation</h5>
                <br/>
                <FormControl variant="filled" fullWidth>
                  <InputLabel>Rotation Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value={1}>Clockwise</MenuItem>
                    <MenuItem value={2}>Counterclockwise</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <br/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <ListItem className="sidebar-header">
            <SettingsIcon className="sidebar-item-icon" />
            Atributes
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="sidebar-item-content">
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <h5 className="sidebar-item">Image</h5>
                <br/>
                <FormControl variant="filled" fullWidth>
                  <TextField 
                    variant="filled"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    placeholder="URL"
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <FormControl variant="filled" fullWidth>
                  <InputLabel>Image Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value={1}>Top</MenuItem>
                    <MenuItem value={2}>Background</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* Image Buttons */}
            <Grid justify="center" container spacing={3}>
              <Grid justify="center" item xs={5}>
                <Button variant="contained" color="primary">Add Image</Button>
              </Grid>
              <Grid justify="center" item xs={7}>  
                <Button variant="contained" color="secondary">Remove Image</Button>
              </Grid>
            </Grid>
            {/* Image Buttons */}
            <br/>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <h5 className="sidebar-item">Text</h5>
                <br/>
                <FormControl variant="filled" fullWidth>
                  <TextField 
                    variant="filled"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    placeholder="Insert your text here"
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
            <br/>
            <Grid container spacing={3}>
              <Grid justify="center" item xs={12}>
                <FormControl variant="filled" fullWidth>
                  <InputLabel>Text Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value={1}>Fixed</MenuItem>
                    <MenuItem value={2}>Tepmorary</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <br/>
            {/* Text Buttons */}
            <Grid justify="center" container spacing={3}>
              <Grid justify="center" item xs={5}>
                <Button variant="contained" color="primary">Add Text</Button>
              </Grid>
              <Grid justify="center" item xs={7}>  
                <Button variant="contained" color="secondary">Remove Text</Button>
              </Grid>
            </Grid>
            {/* Text Buttons */}
            <br/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Sidebar;
