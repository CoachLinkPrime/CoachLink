import React from 'react';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

function CoachingJobApply({onClick}) {

    const handleApplyClick = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Before you apply, make sure you go through all legal documentations!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e37da1',
        cancelButtonColor: '#7EBBF1',
        confirmButtonText: 'Ready to apply!',
    }).then((result) => {
        if (result.isConfirmed) {
        onClick();
        Swal.fire('Applied!', 'You have applied to this gig.', 'success');
        }
    });
    };

    return (
        <Button variant='contained' 
        sx={{
            backgroundColor: '#7EBBF1',
            '&:hover': {
              backgroundColor: '#C6E5F3',
              color: 'black'
            },
            color: 'white'
          }}
          onClick={handleApplyClick}>
			Apply
		</Button>
    )
}

export default CoachingJobApply;