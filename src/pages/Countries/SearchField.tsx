import { InputAdornment, TextField } from "@mui/material";

import { ChangeEventHandler } from "react";
import SearchIcon from '@mui/icons-material/Search';

type SearchFieldProps = {
  value?: unknown,
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

function SearchField(props: SearchFieldProps) {
  return (
    <TextField
      label="Search for a country..."
      size="small"
      InputProps={{
        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
      }}
      {...props}
    />
  );
}

export default SearchField;