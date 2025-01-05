import { Button } from "@mui/material";
import styles from "./Tricks.module.css";

function Tricks() {
  return (
    <div className="container py-12 px-12">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-rose-400 text-xl">LATEST POSTS</h3>
          <p className="text-3xl md:text-5xl ">Florist Tricks</p>
        </div>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: 50, paddingBlock: "0.8rem", fontSize: "1.2rem" }}
          size="large"
        >
          view all posts
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-4">
        <div className="card shadow shadow-black group ">
          <div className="imgWrapper w-full">
            <img
              src="https://preview.colorlib.com/theme/florist/img/blog/blog-1.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="cardContent text-center p-5 flex flex-col gap-5 relative">
            <a href="#" className="group-hover:underline text-2xl">
              8 Romantic Gifts to Celebrate Your Wedding Anniversary
            </a>
            <p className="text-lg text-gray-400">
              Flowers have a language all their own. In Victorian times,
              receiving a…
            </p>
            <p className="text-gray-400 text-lg">MAY 22, 2020</p>
            <span
              className={`${styles.cardBadge} bg-black group-hover:bg-pink-400 transition duration-300 px-2`}
            >
              TREND NEWS
            </span>
          </div>
        </div>
        <div className="card shadow shadow-black group ">
          <div className="imgWrapper w-full">
            <img
              src="https://preview.colorlib.com/theme/florist/img/blog/blog-2.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="cardContent text-center p-5 flex flex-col gap-5 relative">
            <a href="#" className="group-hover:underline text-2xl">
              8 Romantic Gifts to Celebrate Your Wedding Anniversary
            </a>
            <p className="text-lg text-gray-400">
              Flowers have a language all their own. In Victorian times,
              receiving a…
            </p>
            <p className="text-gray-400 text-lg">MAY 22, 2020</p>
            <span
              className={`${styles.cardBadge} bg-black group-hover:bg-pink-400 transition duration-300 px-2`}
            >
              TREND NEWS
            </span>
          </div>
        </div>
        <div className="card shadow shadow-black group ">
          <div className="imgWrapper w-full">
            <img
              src="https://preview.colorlib.com/theme/florist/img/blog/blog-3.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="cardContent text-center p-5 flex flex-col gap-5 relative">
            <a href="#" className="group-hover:underline text-2xl">
              8 Romantic Gifts to Celebrate Your Wedding Anniversary
            </a>
            <p className="text-lg text-gray-400">
              Flowers have a language all their own. In Victorian times,
              receiving a…
            </p>
            <p className="text-gray-400 text-lg">MAY 22, 2020</p>
            <span
              className={`${styles.cardBadge} bg-black group-hover:bg-pink-400 transition duration-300 px-2`}
            >
              TREND NEWS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tricks;
