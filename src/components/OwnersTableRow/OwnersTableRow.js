import React from 'react';
import { connect } from 'react-redux';
import { Button, TableCell, TableRow } from '@material-ui/core'


function OwnersTableRow(props) {

  const handleOwnerDelete = (ownerId) => {
    props.dispatch({ type: "DELETE_OWNER", payload: ownerId })
  }
  return (
    <TableRow>
        <TableCell>{props.owner.name}</TableCell>
        <TableCell>Number of Pets</TableCell>
        <TableCell>
            <Button 
                variant="contained" 
                color="secondary"
                onClick={() => handleOwnerDelete(props.owner.id)}
                >Delete
            </Button>
        </TableCell>
    </TableRow>
  );
}



export default connect()(OwnersTableRow);