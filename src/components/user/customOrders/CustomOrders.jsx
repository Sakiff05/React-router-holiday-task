import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function CustomOrders() {
  return (
    <div className="container px-12 flex flex-wrap items-start justify-center gap-10">
      <div className="grid grid-cols-1 gap-x-5 gap-y-16 mt-20 w-full lg:w-4/12">
        <div className="card border flex flex-col items-center gap-4 py-10 px-5 relative">
          <div className="imgWrapper absolute bottom-36  bg-white max-h-16">
            <img
              src="https://preview.colorlib.com/theme/florist/img/services/services-1.png"
              alt=""
            />
          </div>
          <h1 className="text-xl">Custom orders</h1>
          <p>
            Flower helps you perfectly express how important your significant.
          </p>
        </div>
        <div className="card border flex flex-col items-center gap-4 py-10 px-5 relative">
          <div className="imgWrapper absolute bottom-36  bg-white max-h-16">
            <img
              src="https://preview.colorlib.com/theme/florist/img/services/services-2.png"
              alt=""
            />
          </div>
          <h1 className="text-xl">Event decoration</h1>
          <p>
            Flower helps you perfectly express how important your significant.
          </p>
        </div>
        <div className="card border flex flex-col items-center gap-4 py-10 px-5 relative">
          <div className="imgWrapper absolute bottom-36  bg-white max-h-16">
            <img
              src="https://preview.colorlib.com/theme/florist/img/services/services-3.png"
              alt=""
            />
          </div>
          <h1 className="text-xl">Green landscape</h1>
          <p>
            Flower helps you perfectly express how important your significant.
          </p>
        </div>
      </div>
      <div className="order flex flex-col w-full lg:w-7/12">
        <div className="order-video relative">
          <img src="./src/assets/media/services-video.jpg" alt="" />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            onClick={() => setIsClicked(!isClicked)}
          >
            <PlayCircleIcon
              sx={{
                fontSize: "5rem",
                color: "black",
              }}
            />
          </IconButton>
          <p className="text-3xl lg:text-5xl bg-white absolute bottom-0 left-0 p-4">
            Custom Order
          </p>
        </div>
        <div className="order-content mt-5 flex flex-col gap-6">
          <span className="text-xl text-rose-500 ">From $60 - $300</span>
          <p className="text-wrap">
            For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
            growing flowers that can be dried and incorporated into late fall
            and winter floral arrangements has been a game-changer. During her
            growing season, this farmer-florist relies on a vivid palette of
            annuals, perennials and ornamental grasses to supply her studio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="content-card flex  gap-2 items-start">
              <img
                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                alt=""
              />
              <p>
                Free initial consulting. For retail and office tenants who are
                interested in a weekly delivery program floral design plan.
              </p>
            </div>
            <div className="content-card flex  gap-2 items-start">
              <img
                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                alt=""
              />
              <p>
                Birthday Blooms. Red White & Bloom will offer a free arrangement
                to each office manager for a commercial account on his or her
                birthday.
              </p>
            </div>
            <div className="content-card flex  gap-2 items-start">
              <img
                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                alt=""
              />
              <p>
                Free initial consulting. For retail and office tenants who are
                interested in a weekly delivery program floral design plan.
              </p>
            </div>
            <div className="content-card flex  gap-2 items-start">
              <img
                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                alt=""
              />
              <p>
                Birthday Blooms. Red White & Bloom will offer a free arrangement
                to each office manager for a commercial account on his or her
                birthday.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6">
          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
          growing flowers that can be dried and incorporated into late fall and
          winter floral arrangements has been a game-changer. During her growing
          season, this farmer-florist relies on a vivid palette of annuals,
          perennials and ornamental grasses to supply her studio.
        </p>
        <div className=" bg-slate-100 py-12 px-10 mt-10 mb-20">
          <h1 className="uppercase text-3xl mb-5 text-center">Get a quote</h1>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                className="px-2 py-3 border"
                placeholder="Name"
              />
              <input
                type="email"
                className="px-2 py-3 border"
                placeholder="Email"
              />
              <input
                type="number"
                className="px-2 py-3 border"
                placeholder="Number"
              />
              <select className="text-gray-400 px-2 py-3 border">
                <option value="type">Type Services</option>
              </select>
            </div>
            <textarea className="w-full h-28 mt-5 p-2" placeholder="Message" />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 mt-5 text-xl uppercase"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomOrders;
