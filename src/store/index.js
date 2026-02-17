import { configureStore } from "@reduxjs/toolkit";
import adminUsersReducer from "../admin/store/adminUsersSlice";
import adminDashboardReducer from "../admin/store/adminDashboardSlice";
import adminEmsReducer from "../admin/store/adminEmsSlice";
import adminRfqReducer from "../admin/store/adminRfqSlice";

export const store = configureStore({
  reducer: {
    adminUsers: adminUsersReducer,
    adminDashboard: adminDashboardReducer,
    adminEMS: adminEmsReducer,
    adminRFQ: adminRfqReducer,
  },
});
