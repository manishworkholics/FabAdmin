import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../utils/apolloClient";
import { ADMIN_USERS_QUERY } from "../graphql/queries";

export const fetchAdminUsers = createAsyncThunk(
  "adminUsers/fetch",
  async ({ page = 1, limit = 10 }) => {
    const { data } = await client.query({
      query: ADMIN_USERS_QUERY,
      variables: {
        input: { page, limit },
      },
      fetchPolicy: "no-cache",
    });

    return data.adminUsers;
  }
);

const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState: {
    users: [],
    total: 0,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.total = action.payload.total;
      })
      .addCase(fetchAdminUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default adminUsersSlice.reducer;
