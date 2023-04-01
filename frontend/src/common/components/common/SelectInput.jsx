import { Select, MenuItem, TextField } from "@mui/material";
import React from "react";

const SelectInput = ({
  defaultValue,
  label = "Add label",
  handleChange,
  items,
  required = false,
}) => {
  return (
    <>
      <TextField
        labelId="select-label"
        id="select-label"
        value={defaultValue || items[0].value}
        label={label}
        onChange={handleChange}
        required={required}
        select
      >
        {items.map((element) => (
          <MenuItem key={element.value} value={element.value}>
            {element.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default SelectInput;
