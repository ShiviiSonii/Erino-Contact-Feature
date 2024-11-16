import React from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';

function ContactTableRow({ row, isItemSelected, handleClick, labelId }) {
  return (
    <TableRow hover onClick={(event) => handleClick(event, row.id)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.id} selected={isItemSelected}>
      <TableCell padding="checkbox">
        <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.first_name}
      </TableCell>
      <TableCell align="left">{row.last_name}</TableCell>
      <TableCell align="left">{row.email}</TableCell>
      <TableCell align="left">{row.phone_number}</TableCell>
      <TableCell align="left">{row.company}</TableCell>
      <TableCell align="left">{row.job_title}</TableCell>
    </TableRow>
  );
}

export default ContactTableRow;
