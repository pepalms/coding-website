import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function createData(name, age, team, td ) {
  return { name, age, team, td };
}

const rows = [
  createData('Patrick Mahomes', 24, 'Chiefs', 21),
  createData('Dak Prescott', 26, 'Cowboys', 37),
  createData('Russell Wilson', 30, 'Seahawks', 119),
  createData('Tom Brady', 42, 'Bucs', 197),
  createData('Justin Herbert', 21, 'Chargers', 7),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table size="small" className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of players</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Team</TableCell>
            <TableCell align="center">Touchdowns</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.team}</TableCell>
              <TableCell align="center">{row.td}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}