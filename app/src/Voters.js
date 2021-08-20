import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import Title from './Title';
import Fab from '@material-ui/core/Fab';


// Generate Order Data
function createData(id, address) {
  return { id, address };
}

const rows = [
  createData(0, '0xe37a055f58c61de3a25ddecac9b29874db9de0ac'),
  createData(1, '0x506fa8414382e855113b0d05ce7b896cc7db22a6'),
  createData(2, '0x9960b1776e4db9673c5a14912bafdec6e4313589'),
  createData(3, '0xab18c7ffa2c53351475b19709a524bc7f4ac7565'),
  createData(4, '0x4e1dbdbcc363432137cc634d6b3c6a5fa830fc89'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
   
  }));

export default function Orders({accounts}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Voters' List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(accounts).map((address) => (
            <TableRow style={{
                whiteSpace: 'normal',
                wordBreak: 'break-word',
            }} key={address}>
              <TableCell>{accounts[address]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      </div>
      
    </React.Fragment>
  );
}