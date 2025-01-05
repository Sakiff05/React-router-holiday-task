import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { basketContext } from "../../../context/BasketProvider";
import Swal from "sweetalert2";

function BasketTable() {
  const { basket, setBasket } = React.useContext(basketContext);
  const totalPrice = basket
    .map((item) => item.price * item.count)
    .reduce((sum, acc) => sum + acc, 0);

  function handleDec(id) {
    let findedFlower = basket.find((item) => item.id == id);
    if (findedFlower.count > 1) {
      findedFlower.count--;
      setBasket([...basket]);
    } else {
      let filteredBasket = basket.filter((item) => item.id != id);
      setBasket([...filteredBasket]);
    }
  }

  function handleInc(id) {
    let findedFlower = basket.find((item) => item.id == id);
    findedFlower.count++;
    setBasket([...basket]);
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
        let filteredBasket = basket.filter((item) => item.id != id);
        setBasket([...filteredBasket]);
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return basket.length > 0 ? (
    <div className="container px-12 pb-20">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                Name
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                Price
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                Total price
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                Image
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "1.5rem" }}>
                Count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <p className="text-xl">{item.title}</p>
                </TableCell>
                <TableCell align="left">
                  <p className="text-xl">{`$ ${item.price}`}</p>
                </TableCell>
                <TableCell align="left">
                  <p className="text-xl">
                    {`$ ${(item.price * item.count).toFixed(2)}`}
                  </p>
                </TableCell>
                <TableCell align="left">
                  <img src={item.img} alt="" className="max-h-28" />
                </TableCell>
                <TableCell align="left">
                  <div className="flex items-center gap-5 text-xl">
                    <button
                      onClick={() => handleDec(item.id)}
                      className="border border-rose-500 rounded px-3 py-2 hover:bg-rose-100 transition"
                    >
                      -
                    </button>
                    {item.count}
                    <button
                      onClick={() => handleInc(item.id)}
                      className="border border-green-500 rounded px-3 py-2 hover:bg-green-100 transition"
                    >
                      +
                    </button>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(item.id)}
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="border py-10 px-4 text-xl">
        Total price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  ) : (
    <p className="text-4xl text-center pb-12">
      You have no item in your basket
    </p>
  );
}

export default BasketTable;
