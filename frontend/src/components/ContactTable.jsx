import React, { useState } from 'react';
import { Box, Paper, TableContainer, Table, TableBody, TablePagination, TableRow, TableCell } from '@mui/material';
import ContactTableHead from './ContactTableHead';
import ContactTableToolbar from './ContactTableToolbar';
import ContactTableRow from './ContactTableRow';
import { useFetchContacts } from '../hooks/useFetchContacts';
import { useDeleteContact } from '../hooks/useDeleteContact';

function ContactTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('first_name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = useFetchContacts();
  const { status, deleteContact } = useDeleteContact();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);  
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, row) => {
    const rowId = row.id; 
    const selectedIndex = selected.indexOf(rowId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, rowId];
    } else {
      newSelected = selected.filter((selectedId) => selectedId !== rowId);
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = () => {
    selected.forEach((contactId) => {
      deleteContact(contactId);  
    });
    setSelected([]);  
  };

  const sortedRows = rows.sort((a, b) => {
    if (orderBy === 'first_name') {
      return order === 'asc' ? a.first_name.localeCompare(b.first_name) : b.first_name.localeCompare(a.first_name);
    }
    if (orderBy === 'last_name') {
      return order === 'asc' ? a.last_name.localeCompare(b.last_name) : b.last_name.localeCompare(a.last_name);
    }
    if (orderBy === 'email') {
      return order === 'asc' ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email);
    }
    if (orderBy === 'phone_number') {
      return order === 'asc' ? a.phone_number.localeCompare(b.phone_number) : b.phone_number.localeCompare(a.phone_number);
    }
    if (orderBy === 'company') {
      return order === 'asc' ? a.company.localeCompare(b.company) : b.company.localeCompare(a.company);
    }
    if (orderBy === 'job_title') {
      return order === 'asc' ? a.job_title.localeCompare(b.job_title) : b.job_title.localeCompare(a.job_title);
    }
    return 0;
  });

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const visibleRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <ContactTableToolbar 
          numSelected={selected.length} 
          selectedContactIds={selected}  
          handleDelete={handleDelete}  
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <ContactTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
              numSelected={selected.length}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const rowId = row.id;  // Use 'id' here
                const isItemSelected = selected.indexOf(rowId) !== -1;
                const labelId = `enhanced-table-checkbox-${index}`;
                return <ContactTableRow row={row} isItemSelected={isItemSelected} handleClick={handleClick} labelId={labelId} />;
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default ContactTable;
