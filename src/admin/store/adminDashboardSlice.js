import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../utils/apolloClient";
import { ADMIN_DASHBOARD_QUERY } from "../graphql/queries";

export const fetchAdminDashboard = createAsyncThunk(
  "adminDashboard/fetch",
  async () => {
    const { data } = await client.query({
      query: ADMIN_DASHBOARD_QUERY,
      fetchPolicy: "no-cache",
    });
    return data.adminDashboard;
  }
);

const slice = createSlice({
  name: "adminDashboard",
  initialState: {
    data: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default slice.reducer;
