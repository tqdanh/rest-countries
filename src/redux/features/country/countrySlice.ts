import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Country } from "../../../types"
import CountryService from "../../../services/CountryService";
import { RootState } from "../../app/store";

export type CountryState = {
  countries: Country[],
  loading: boolean,
  error: string | undefined
};

const initialState: CountryState = {
  countries: [],
  loading: false,
  error: undefined
};

export const getAsync = createAsyncThunk(
  "country/getAsync",
  async () => {
    const countryService = new CountryService();
    let countries = await countryService.getAll();
    return countries;
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAsync.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.error = undefined;
        state.loading = false;
      })
      .addCase(getAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      });
  }
});

export const selectCountries = (state: RootState) => state.country.countries;
export const selectLoading = (state: RootState) => state.country.loading;
export const selectError = (state: RootState) => state.country.error;

export default countrySlice.reducer;