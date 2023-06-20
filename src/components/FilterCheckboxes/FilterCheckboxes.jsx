import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function FilterCheckboxes() {
  // function handleInput(event) {
  //   toggleFilters(event.target.value);
  // }

  return (
    <div>
      <FormControlLabel control={<Checkbox
        sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />} label="Ski" />
      {/* <FormControlLabel control={<Checkbox
        sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />} label="Snowboard" />
      <FormControlLabel control={<Checkbox
        sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />} label="Uncertified" /> */}
    </div>
  )
}