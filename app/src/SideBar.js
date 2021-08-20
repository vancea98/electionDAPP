import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
export default function SideBar ({setShow}) {
    return (
    <div>
      <ListItem button onClick={() => setShow('dashboard')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={() => setShow('electionsDashboard')}>
        <ListItemIcon>
          <HowToVoteIcon />
        </ListItemIcon>
        <ListItemText primary="Elections" />
      </ListItem>
      <ListItem button onClick={() => setShow('votersDashboard')}>
        <ListItemIcon>
          <ThumbsUpDownIcon />
        </ListItemIcon>
        <ListItemText primary="Voters" />
      </ListItem>
    
      <ListItem button onClick={() => setShow('signIn')}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem> 
  
    </div>
    );
  }