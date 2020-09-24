import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, TableCell, TableRow } from '@material-ui/core'


function OwnersTableRow(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [heading, setHeading] = useState('Owners Table Row');

  return (
    <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Number of Pets</TableCell>
        <TableCell><Button variant="contained" color="secondary">Delete</Button></TableCell>
    </TableRow>
  );
}



export default connect()(OwnersTableRow);