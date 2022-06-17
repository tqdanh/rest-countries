import { Box, Grid } from "@mui/material";
import { getAsync, selectCountries, selectError, selectLoading } from "../../redux/features/country/countrySlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useMemo, useState } from "react";

import CountryCard from "./CountryCard";
import RegionFilter from "./RegionFilter";
import SearchField from "./SearchField";

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
    if (countries.length === 0 && !loading) {
      dispatch(getAsync());
    }
  }, []);

  return (
    <Box marginY={5}>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>error: {error}</p>}
      {!loading &&
        <Grid container>
          <Grid container item>
            <Grid item xs={5}>
              <SearchField value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
            </Grid>
            <Grid item xs={5} />
            <Grid item xs={2}>
              <RegionFilter value={region} onChange={(event) => setRegion(event.target.value)} />
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