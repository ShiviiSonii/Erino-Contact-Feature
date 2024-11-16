import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import { Delete as DeleteIcon, Edit } from '@mui/icons-material';
import BasicModal from './Modal';

function ContactTableToolbar({ numSelected, handleDelete, handleEditContact }) {
  return (
    <Toolbar
      sx={[
        { pl: { sm: 2 }, pr: { xs: 1, sm: 1 } },
        numSelected > 0 && {
          bgcolor: (theme) => theme.palette.action.activatedOpacity,
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="div">
          Contacts
        </Typography>
      )}

      {numSelected > 0 ? (
        <>
          <Tooltip title="Edit">
            <IconButton onClick={handleEditContact}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <BasicModal />
      )}
    </Toolbar>
  );
}

ContactTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEditContact: PropTypes.func.isRequired,
};

export default ContactTableToolbar;
