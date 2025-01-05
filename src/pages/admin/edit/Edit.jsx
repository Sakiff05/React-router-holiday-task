import { useEffect } from "react";
import EditForm from "../../../components/admin/editForm/EditForm";

function Edit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <EditForm />
    </div>
  );
}

export default Edit;
