import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../utils/apolloClient";
import { ADMIN_RFQ_QUERY } from "../graphql/queries";

export const fetchAdminRFQs = createAsyncThunk(
  "adminRFQ/fetch",
  async ({ page = 1, limit = 10 }) => {
    const { data } = await client.query({
      query: ADMIN_RFQ_QUERY,
      variables: {
        input: { page, limit },
      },
      fetchPolicy: "no-cache",
    });

    return data.adminRFQs;
  }
);

const slice = createSlice({
  name: "adminRFQ",
  initialState: {
    rfqs: [],
    total: 0,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminRFQs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminRFQs.fulfilled, (state, action) => {
        state.loading = false;
        state.rfqs = action.payload.rfqs;
        state.total = action.payload.total;
      });
  },
});

export default slice.reducer;
