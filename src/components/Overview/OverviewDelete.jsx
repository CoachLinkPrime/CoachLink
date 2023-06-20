import React from 'react';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

function OverviewDelete({ onClick }) {
  
    const handleDeleteClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e37da1',
            cancelButtonColor: '#7EBBF1',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
            onClick();
            Swal.fire('Deleted!', 'The item has been deleted.', 'success');
            }
        });
        };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#e37da1',
        '&:hover': {
          backgroundColor: '#de5c75',
        },
        color: 'black',
      }}
      onClick={handleDeleteClick}
    >
      Delete
    </Button>
  );
}

export default OverviewDelete;