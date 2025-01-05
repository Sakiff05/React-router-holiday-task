import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AdminBreadCrumb from "../adminBreadCrumb/AdminBreadCrumb";
import axios from "axios";
import Swal from "sweetalert2";

function EditForm() {
  const { id } = useParams("id");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    try {
      let res = await axios.get(`http://localhost:5000/flowers/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleEdit(values) {
    axios
      .patch(`http://localhost:5000/flowers/${id}`, values)
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Flower details successfully saved",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => navigate(-1))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getData();
  }, []);

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    type: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(20, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
    price: Yup.number()
      .positive("Price must be positive")
      .min(3, "Price must be 3 dollars or more")
      .required("Required"),
    img: Yup.string().required("Required").url("Flower image should be url"),
  });

  return (
    <>
      <AdminBreadCrumb page="edit">{data.title}</AdminBreadCrumb>
      <Formik
        initialValues={{
          title: data.title || "",
          type: data.type || "",
          description: data.description || "",
          price: data.price || "",
          img: data.img || "",
        }}
        validationSchema={SignupSchema}
        enableReinitialize
        onSubmit={(values) => handleEdit(values)}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center items-center gap-3">
            <Field
              name="title"
              className="border rounded w-96 px-2 py-3"
              placeholder="Title..."
            />
            {errors.title && touched.title ? (
              <Alert
                severity="error"
                className="w-96 flex justify-center items-center"
              >
                {errors.title}
              </Alert>
            ) : null}
            <Field
              name="type"
              className="border rounded w-96 px-2 py-3"
              placeholder="Type..."
            />
            {errors.type && touched.type ? (
              <Alert
                severity="error"
                className="w-96 flex justify-center items-center"
              >
                {errors.type}
              </Alert>
            ) : null}
            <Field
              name="description"
              className="border rounded w-96 px-2 py-3"
              placeholder="Description..."
            />
            {errors.description && touched.description ? (
              <Alert
                severity="error"
                className="w-96 flex justify-center items-center"
              >
                {errors.description}
              </Alert>
            ) : null}
            <Field
              name="price"
              className="border rounded w-96 px-2 py-3"
              placeholder="Price..."
            />
            {errors.price && touched.price ? (
              <Alert
                severity="error"
                className="w-96 flex justify-center items-center"
              >
                {errors.price}
              </Alert>
            ) : null}

            <Field
              name="img"
              className="border rounded w-96 px-2 py-3"
              placeholder="Image..."
            />
            {errors.img && touched.img ? (
              <Alert
                severity="error"
                className="w-96 flex justify-center items-center"
              >
                {errors.img}
              </Alert>
            ) : null}

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
              sx={{ marginBottom: "2rem" }}
            >
              Save Changes
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditForm;
