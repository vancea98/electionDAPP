import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
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

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
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
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more votes
        </Link>
      </div>
    </React.Fragment>
  );
}