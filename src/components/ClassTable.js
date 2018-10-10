import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, complete1, complete2, complete3) {
  id++;
  return { id, name, complete1, complete2, complete3 };
}

const data = [
  createData( 'Bob Studious', 'y', 'y', 'n'),
  createData( 'Sarah Homework', 'y', 'y', 'n'),
  createData( 'Phillip Piechart', 'y', 'n', 'n'),
  createData( 'Ruth Ruler', 'n', 'y', 'n'),
  createData( 'Chad Chalkboard', 'n', 'y', 'n'),
  createData( 'Daryl Desktop', 'n', 'n', 'n'),
]

function ClassTable(props) {
  const { classes } = props;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Student ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Form 1</TableCell>
          <TableCell>Form 2</TableCell>
          <TableCell>Form 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(student => {
          return (
            <TableRow key={student.id}>
              <TableCell component="th" scope="row">{student.id}</TableCell>
              <TableCell component="th" scope="row">{student.name}</TableCell>
              <TableCell component="th" scope="row">{student.complete1}</TableCell>
              <TableCell component="th" scope="row">{student.complete2}</TableCell>
              <TableCell component="th" scope="row">{student.complete3}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

ClassTable.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(ClassTable);
