import { useEffect, useState } from "react";
import axios from "axios";
import FlowerCard from "../flowerCard/FlowerCard";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
function Shop() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [sort, setSort] = useState("");

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/flowers");
      setData(res.data);
      setSearchData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    let filteredData = [...searchData].filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
    console.log(filteredData);
  }

  function handleSort(e) {
    let sortValue = e.target.value;
    setSort(sortValue);
    switch (sortValue) {
      case "name":
        let sortedByName = [...data].toSorted((a, b) =>
          a.title.localeCompare(b.title)
        );
        setData(sortedByName);
        break;
      case "price":
        let sortedByPrice = [...data].toSorted((a, b) => a.price - b.price);
        setData(sortedByPrice);
        break;
      case "default":
        setData([...searchData]);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);
  return (
    <div className="container px-12 py-12">
      <div className="flex flex-col gap-5">
        <p className="text-rose-400 text-center text-lg">OUR FLOWER</p>
        <h1 className="text-5xl text-center">New Arrivals</h1>
        <ul className="flex justify-center items-center gap-6 text-xl flex-wrap">
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Bouquet</a>
          </li>
          <li>
            <a href="#">Flower box</a>
          </li>
          <li>
            <a href="#">Flower shelf</a>
          </li>
          <li>
            <a href="#">Basket of flower</a>
          </li>
          <li>
            <a href="#">Gift combos</a>
          </li>
        </ul>
        <div className="shop-header flex flex-wrap items-center md:justify-between mt-5 gap-y-5 justify-center">
          <div className="flex items-center gap-5">
            <IconButton sx={{ bgcolor: "lightgray" }}>
              <MenuIcon className="text-black " />
            </IconButton>
            <p>Showing 1–9 of 14 results</p>
          </div>
          <form
            className="flex items-center gap-3"
            onSubmit={(e) => handleSearch(e)}
          >
            <input
              type="search"
              className="border border-slate-300 px-2 py-3 outline-none text-xl"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton
              sx={{
                border: "1px solid gray",
                borderRadius: "0px",
                padding: "0.5rem",
              }}
              type="submit"
            >
              <SearchIcon className="text-black" fontSize="large" />
            </IconButton>
          </form>
          <div>
            <select
              className="border px-2 py-3 w-60"
              value={sort}
              onChange={(e) => handleSort(e)}
            >
              <option value="default">Default</option>
              <option value="name">Sort by name</option>
              <option value="price">Sort by price</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-10 gap-y-10 ">
        {data.map((flower) => (
          <FlowerCard flower={flower} key={flower.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
