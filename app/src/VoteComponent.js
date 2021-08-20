import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fabRight: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    fabLight: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
      },

  }));

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'candidates',
    headerName: 'Candidates',
    width: 250,
    editable: false,
  },
  {
    field: 'leadership',
    headerName: 'Leadership',
    width: 250,
    editable: false,
  },
  {
    field: 'Affiliation',
    headerName: 'Affiliation',
    width: 135,
    editable: false,
  },
];

const rows = [
  { id: 1, candidates: 'Social Democratic Party', leadership: 'Marcel Ciolacu', Affiliation: 'S&D' },
  { id: 2, candidates: 'National Liberal Party', leadership: 'Ludovic Orban', Affiliation: 'EPP' },
  { id: 3, candidates: 'Alliance for the Unity of Romanians', leadership: 'Georgr Simion', Affiliation: 'Unaffiliated' },
  { id: 4, candidates: 'Alliance 2020 (USR + PLUS)', leadership: 'Dacian Ciolos & Dan Barna', Affiliation: 'RE' },
  { id: 5, candidates: 'Democratic Alliance of Hungarians in Romania', leadership: 'Hunor Kelemen', Affiliation: 'EPP' },
  { id: 6, candidates: "People's Movement Party", leadership: 'Eugen Tomac', Affiliation: 'EPP' },
  { id: 7, candidates: 'Humanist Power Party', leadership: 'Daniel Ionascu', Affiliation: 'Unaffiliated' },
  { id: 8, candidates: 'PRO Romania Social Liberal', leadership: 'Victor Ponta', Affiliation: 'S&D' },
  { id: 9, candidates: 'Romanian Ecologist Party', leadership: 'Danut Pop', Affiliation: 'Unaffiliated' },
];

export default function DataGridDemo() {
    const classes = useStyles();

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
      <Fab color="secondary" variant="extended" className={classes.fabLeft}>
        <ThumbUpIcon className={classes.extendedIcon} />
        Submit vote
      </Fab>
      <Fab color="primary" aria-label="add" className={classes.fabRight}>
        <AddIcon />
      </Fab>
    </div>
  );
}