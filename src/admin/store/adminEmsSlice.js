import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../utils/apolloClient";
import { ADMIN_EMS_COMPANIES_QUERY } from "../graphql/queries";

export const fetchAdminEMS = createAsyncThunk(
  "adminEMS/fetch",
  async ({ page = 1, limit = 10 }) => {
    const { data } = await client.query({
      query: ADMIN_EMS_COMPANIES_QUERY,
      variables: {
        input: { page, limit },
      },
      fetchPolicy: "no-cache",
    });

    return data.adminEMSCompanies;
  }
);

const slice = createSlice({
  name: "adminEMS",
  initialState: {
    companies: [],
    total: 0,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminEMS.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminEMS.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload.companies;
        state.total = action.payload.total;
      });
  },
});

export default slice.reducer;
