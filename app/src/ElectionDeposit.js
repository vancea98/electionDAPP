import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import { Link } from "react-router-dom";
import { newContextComponents } from "@drizzle/react-components";

import Modal from './Modal/Modal.js';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const { AccountData, ContractData, ContractForm } = newContextComponents;


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    depositContext: {
        flex: 1,
      },
  }));


export default ({ drizzle, drizzleState, setModal, modal, onClose }) => {


  const classes = useStyles();
  return (
    <>
      <Title>Election 0</Title>
      <Typography component="p" variant="h4">
        National parliament voting - Romania
      </Typography>
      <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      <div>
      
      <Fab onClick={setModal} variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        View candidates
      </Fab>
      <Modal onClose={onClose} modal={modal}>
        <RadioButtons />
      </Modal>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      </div>
    </>
  );
}

const RadioButtons = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
    <FormLabel component="legend">Gender</FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
      <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
    </RadioGroup>
    </FormControl>
  );  
}