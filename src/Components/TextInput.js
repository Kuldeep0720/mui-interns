import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import * as React from "react";

export default function TextInput() {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="outlined-adornment-amount">Label</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">Value</InputAdornment>}
        label="Amount"
      />
    </FormControl>
  );
}
