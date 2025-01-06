import AdminBreadCrumb from "../../../components/admin/adminBreadCrumb/AdminBreadCrumb";
import AddForm from "../../../components/admin/addForm/AddForm";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Add() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Admin | Add</title>
        <meta name="description" content="Add product" />
      </Helmet>
      <AdminBreadCrumb page="add">Add Flower</AdminBreadCrumb>
      <AddForm />
    </div>
  );
}

export default Add;
