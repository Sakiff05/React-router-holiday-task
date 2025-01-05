import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../loader/Loader";

function ProductsTable() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  async function getData() {
    try {
      setIsLoading(true);
      let res = await axios.get("http://localhost:5000/flowers");
      setData(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/flowers/${id}`)
          .then(() => setData([...data].filter((item) => item.id != id)));
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  }

  React.useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div className="container px-12 pb-20">
      {isLoading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                  #
                </TableCell>
                <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                  Name
                </TableCell>
                <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                  Price
                </TableCell>
                <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                  Type
                </TableCell>
                <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                  Image
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.5rem" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <p className="text-xl">{item.id}</p>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <p className="text-xl">{item.title}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="text-xl">{`$ ${item.price}`}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="text-xl">{item.type}</p>
                  </TableCell>

                  <TableCell align="left">
                    <img src={item.img} alt="" className="max-h-28" />
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      sx={{ marginInline: "1rem" }}
                      onClick={() => navigate(`editproducts/${item.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() => navigate(item.id)}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default ProductsTable;
