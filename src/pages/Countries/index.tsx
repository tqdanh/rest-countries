import { Box, FormControl, Grid, MenuItem, Select, TextField } from "@mui/material";
import { getAsync, selectCountries, selectError, selectLoading } from "../../redux/features/country/countrySlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useMemo, useState } from "react";

import CountryCard from "./CountryCard";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function Countries() {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("");
  const filteredCountries = useMemo(
    () => countries.filter(c =>
      c.name.common.toLowerCase().includes(searchValue.toLowerCase())
      && (region === "" || c.region === region)
    ),
    [searchValue, region, countries]
  );

  useEffect(() => {
    dispatch(getAsync());
  }, [dispatch]);

  return (
    <Box marginY={5}>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>error: {error}</p>}
      {!loading &&
        <Grid container>
          <Grid container item>
            <Grid item xs={5}>
              <TextField
                label="Search for a country..."
                size="small"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                }}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </Grid>
            <Grid item xs={5} />
            <Grid item xs={2}>
              <FormControl sx={{ width: "100%" }} size="small">
                <Select
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
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
            </Grid>
          </Grid>
          <Grid container item spacing={7} marginTop={0}>
            {filteredCountries.slice(0, 10).map(country =>
              <Grid item xs={3} key={country.name.common}>
                <CountryCard
                  capital={country.capital}
                  flag={country.flags.svg}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      }
    </Box>
  )
}

export default Countries;