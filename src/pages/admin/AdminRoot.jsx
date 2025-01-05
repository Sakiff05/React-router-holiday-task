import { Outlet } from "react-router-dom";
import AdminNav from "../../components/admin/adminNav/AdminNav";
import AdminFooter from "../../components/admin/adminFooter/AdminFooter";

function AdminRoot() {
  return (
    <>
      <AdminNav />
      <Outlet />
      <AdminFooter />
    </>
  );
}

export default AdminRoot;
