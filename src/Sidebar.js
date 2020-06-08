import React from "react";

// Imported Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import WatchIcon from '@material-ui/icons/Watch';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import TimerIcon from '@material-ui/icons/Timer';

// Imported Components
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

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
          <Button>Digital</Button>
          <Button>Analog</Button>
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
            <p className="sidebar-item">Background Colors</p>
            <input className="color-input" type="color" name="background color" id=""/>
            
            <p className="sidebar-item">Digital</p>
            <input className="color-input" type="color" name="background color" id=""/>
            
            <p className="sidebar-item">Analog Hours</p>
            <input className="color-input" type="color" name="background color" id=""/>

            <p className="sidebar-item">Analog Minutes</p>
            <input className="color-input" type="color" name="background color" id=""/>

            <p className="sidebar-item">Analog Seconds</p>
            <input className="color-input" type="color" name="background color" id=""/>

            <p className="sidebar-item">Center Dot</p>
            <input className="color-input" type="color" name="background color" id=""/>
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
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Sidebar;
