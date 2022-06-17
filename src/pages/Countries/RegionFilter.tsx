import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type RegionFilterProps = {
  value?: string | undefined,
  onChange?: ((event: SelectChangeEvent<string>, child: React.ReactNode) => void) | undefined
}

function RegionFilter(props:RegionFilterProps) {
  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <Select
        {...props}
        displayEmpty
      >
        <MenuItem value="">Filter by Region</MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="Americas">Americas</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}

export default RegionFilter;