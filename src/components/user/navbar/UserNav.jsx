import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, NavLink } from "react-router-dom";
import { favoriteContext } from "../../../context/FavoriteProvider";
import { basketContext } from "../../../context/BasketProvider";

const pages = ["Home", "About", "Services", "Blog", "Contact"];

function UserNav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { favorite } = React.useContext(favoriteContext);
  const { basket } = React.useContext(basketContext);
  const totalBasket = basket.reduce((sum, acc) => sum + acc.count, 0);

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ height: "10vh", zIndex: 10 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="container px-12">
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <img
                src="https://preview.colorlib.com/theme/florist/img/logo.png"
                alt=""
              />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <NavLink
                      to={page == "Home" ? "" : page.toLowerCase()}
                      className="text-lg"
                    >
                      {page}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <img
                src="https://preview.colorlib.com/theme/florist/img/logo.png"
                alt=""
              />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <NavLink
                  to={page == "Home" ? "" : page.toLowerCase()}
                  className="text-lg"
                >
                  {page}
                </NavLink>
              </Button>
            ))}
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <Link to="favorites">
                  <FavoriteBorderIcon
                    sx={{
                      fontSize: "2rem",
                      color: "black",
                      marginRight: "1rem",
                    }}
                    className="relative "
                  />
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 absolute bottom-7 left-7">
                    {favorite.length}
                  </span>
                </Link>
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <Link to="basket">
                  <AddShoppingCartIcon
                    sx={{
                      fontSize: "2rem",
                      color: "black",
                      marginRight: "1rem",
                    }}
                    className="relative "
                  />
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 absolute bottom-7 left-7">
                    {totalBasket}
                  </span>
                </Link>
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default UserNav;
