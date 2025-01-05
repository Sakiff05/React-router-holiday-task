import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import FlowerDetails from "../../../components/user/flowerDetails/FlowerDetails";
import Loader from "../../../components/loader/Loader";

function Details() {
  const { id } = useParams("id");
  const [flower, setFlower] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getDataById() {
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
    getDataById();
  }, []);
  return (
    <div>
      <PageBreadCrumb page="details">{flower.title}</PageBreadCrumb>
      {isLoading ? <Loader /> : <FlowerDetails flower={flower} />}
    </div>
  );
}

export default Details;
