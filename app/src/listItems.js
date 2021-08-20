import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import WhereToVoteIcon from '@material-ui/icons/WhereToVote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import Dashboard from '@material-ui/icons/Dashboard';
import ElectionsDashboard from './ElectionDashboard';
import VotersDashboard from './VotersDashboard';



export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/ElectionsDashboard">
      <ListItemIcon>
        <HowToVoteIcon />
      </ListItemIcon>
      <ListItemText primary="Elections" />
    </ListItem>
    <ListItem button component={Link} to="/VotersDashboard">
      <ListItemIcon>
        <ThumbsUpDownIcon />
      </ListItemIcon>
      <ListItemText primary="Voters" />
    </ListItem>
      </div>
  
);

export const secondaryListItems = (
  <div>
    <ListItem button component={Link} to="/SignIn">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);