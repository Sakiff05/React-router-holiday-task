import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminBreadCrumb from "../../../components/admin/adminBreadCrumb/AdminBreadCrumb";
import AdminDetailCard from "../../../components/admin/adminDetailCard/AdminDetailCard";
import axios from "axios";
import Loader from "../../../components/loader/Loader";

function AdminDetails() {
  const { id } = useParams("id");
  const [flower, setFlower] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      setIsLoading(true);
      let res = await axios.get(`http://localhost:5000/flowers/${id}`);
      setFlower(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AdminBreadCrumb page="details">{flower.title}</AdminBreadCrumb>
      {isLoading ? <Loader /> : <AdminDetailCard flower={flower} />}
    </div>
  );
}

export default AdminDetails;
