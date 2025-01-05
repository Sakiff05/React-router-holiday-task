import AdminBreadCrumb from "../../../components/admin/adminBreadCrumb/AdminBreadCrumb";
import AddForm from "../../../components/admin/addForm/AddForm";
import { useEffect } from "react";

function Add() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AdminBreadCrumb page="add">Add Flower</AdminBreadCrumb>
      <AddForm />
    </div>
  );
}

export default Add;
