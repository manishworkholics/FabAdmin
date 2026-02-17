import { Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import AdminLogin from "../pages/AdminLogin";
import AdminProtectedRoute from "./AdminProtectedRoute";
import Users from "../pages/Users";
import EmsCompany from "../pages/EmsCompany";
import RfqList from "../pages/RfqList";

export const adminRoutes = (
    <>
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminProtectedRoute> <AdminLayout /> </AdminProtectedRoute>} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="ems-company-list" element={<EmsCompany />} />
            <Route path="rfq" element={<RfqList />} />
        </Route>
    </>
);
