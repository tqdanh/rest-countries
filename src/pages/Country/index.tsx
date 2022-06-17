import { Box, Grid, Typography } from "@mui/material";
import { getAsync, selectCountries, selectError, selectLoading } from "../../redux/features/country/countrySlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useMemo, useState } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CountryService from "../../services/CountryService";
import { Country as CountryType } from "../../types";
import LinkButton from "../../components/LinkButton";
import { useParams } from "react-router-dom";

function Country() {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const params = useParams();
  const countryName = params.name ?? "";
  const country = useMemo(() => countries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase()), [countries, countryName]);

  useEffect(() => {
    if (countries.length === 0 && !loading) {
      dispatch(getAsync());
    }
  }, []);

  const extractNativeNames = (): string => {
    let result = "";
    if (country) {
      const nativeName = country.name.nativeName;
      for (const key in nativeName) {
        result += `${nativeName[key].common}, `;
      }

      if (result) {
        result = result.substring(0, result.length - 2);
      }
    }
    return result;
  };

  return (
    <Box marginY={5}>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>error: {error}</p>}
      {!loading && country &&
        <>
          <Grid container spacing={5}>
            <Grid container item>
              <Grid item xs={12}>
                <LinkButton to=".." variant="contained" color="inherit" size="small" startIcon={<ArrowBackIcon />} sx={{ paddingX: 3 }}>Back</LinkButton>
              </Grid>
            </Grid>
            <Grid container item spacing={20}>
              <Grid item xs={12} md={6}>
                <img src={country.flags.svg} width="100%" />
              </Grid>
              <Grid container item md={6}>
                <Grid item xs={12}>
                  <Typography variant="h4">{country.name.common}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Native Name: </Typography><Typography variant="body2" display="inline">{extractNativeNames()}</Typography><br />
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Population: </Typography><Typography variant="body2" display="inline">{country.population.toLocaleString()}</Typography><br />
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Region: </Typography><Typography variant="body2" display="inline">{country.region}</Typography><br />
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Sub Region: </Typography><Typography variant="body2" display="inline">{country.subregion}</Typography><br />
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Capital: </Typography><Typography variant="body2" display="inline">{country.capital?.join(", ")}</Typography><br />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Top Level Domain: </Typography><Typography variant="body2" display="inline">{country.tld.join(", ")}</Typography><br />
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Sub Region: </Typography><Typography variant="body2" display="inline">{country.subregion}</Typography><br />
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Capital: </Typography><Typography variant="body2" display="inline">{country.capital?.join(", ")}</Typography><br />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Border Countries: </Typography>
                  {
                    countries
                      .filter(c => country.borders.includes(c.cca3))
                      .map(neighborCountry => <LinkButton to={`/country/${neighborCountry.name.common}`} variant="contained" color="inherit" size="small" sx={{ paddingX: 3, marginLeft: 1 }}>{neighborCountry.name.common}</LinkButton>)
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      }
    </Box>
  )
}

export default Country;