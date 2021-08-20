import { newContextComponents } from "@drizzle/react-components";
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import Title from './Title';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';





import Chart from './Chart';
import Voters from './Voters';
import ElectionDeposit from './ElectionDeposit';

import SideBar from './SideBar';

const { AccountData, ContractData, ContractForm } = newContextComponents;


const drawerWidth = 240;

function createData(id, date, address, election, voteFor, transactionHash) {
  return { id, date, address, election, voteFor, transactionHash };
}

const rows = [
  createData(0, '12 Aug, 2021', '0xe37a055f58c61de3a25ddecac9b29874db9de0ac', 'Election 0', 'Candidate 0', '0x9822bd0cd517dadf333d8b54702be2786ab784a0caca26fcb8515c654cf14a4b'),
  createData(1, '13 Aug, 2021', '0x506fa8414382e855113b0d05ce7b896cc7db22a6', 'Election 0', 'Candidate 0', '0x0cf64d64b032910da3f7748bf0d7aeb794ddc7aa6c3e0ec8a2601e7036d49c57'),
  createData(2, '14 Aug, 2021', '0x9960b1776e4db9673c5a14912bafdec6e4313589', 'Election 0', 'Candidate 0', '0xbb516ffa02a26851689d625315ba2393550d21c63536d7116c29c96529e4c29c'),
  createData(3, '15 Aug, 2021', '0xab18c7ffa2c53351475b19709a524bc7f4ac7565', 'Election 0', 'Candidate 0', '0x40c7ca084940a1a6f3d9c95f575d9cac872e76c3491c2304b50fb8302f4d45b1'),
  createData(4, '16 Aug, 2021', '0x4e1dbdbcc363432137cc634d6b3c6a5fa830fc89', 'Election 0', 'Candidate 0', '0x32ab37a055f58c61de3a25ddecac9b29874db9de0acshSHi213sSHhd2fads231'),
];


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  
    container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


export default ({ drizzle, drizzleState, setShow, accounts }) => {
  // destructure drizzle and drizzleState from props

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  

  return (
    <div className={classes.root}>    
    <SideBar setShow={(e) => setShow(e)} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={fixedHeightPaper}>
            <div className='section'>
              <h2>Welcome!</h2>
            </div>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <React.Fragment>
                  <Title>Votes</Title>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Election</TableCell>
                        <TableCell>Vote for</TableCell>
                        <TableCell align="right">Transaction Hash</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                          <TableRow style={{
                              whiteSpace: 'normal',
                              wordBreak: 'break-word',
                          }} key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.election}</TableCell>
                            <TableCell>{row.voteFor}</TableCell>
                            <TableCell>{row.transactionHash}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                </React.Fragment>
              </Paper>
            </Grid>
          </Grid>
          
        </Container>
      </main>


      </div>
  );
};