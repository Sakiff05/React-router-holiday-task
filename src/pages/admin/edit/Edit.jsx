import { useEffect } from "react";
import EditForm from "../../../components/admin/editForm/EditForm";
import { Helmet } from "react-helmet-async";

function Edit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Admin | Edit</title>
        <meta name="description" content="Edit product" />
      </Helmet>
      <EditForm />
    </div>
  );
}

export default Edit;
