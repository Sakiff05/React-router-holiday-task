import { Button } from "@mui/material";
import styles from "./CustomFlower.module.css";
function CustomFlower() {
  return (
    <div className={`${styles.customBg} my-16`}>
      <div className=" w-full  container px-12 ">
        <div className="text-white w-full lg:w-5/12 flex flex-col gap-8">
          <h1 className="text-xl">CUSTOM FLOWER</h1>
          <p className="text-6xl">
            Let our flowers make your party more perfect.
          </p>
          <div className="flex gap-4 ">
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 50 }}
              size="large"
            >
              Order Now
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: 50,
                color: "violet",
                backgroundColor: "white",
              }}
              size="large"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomFlower;
