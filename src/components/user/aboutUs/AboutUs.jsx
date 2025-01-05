import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";

function AboutUs() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="container px-12 pb-6 ">
      {isClicked ? (
        <div className="h-screen ytVideo">
          <IconButton onClick={() => setIsClicked(!isClicked)}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <>
          <div className="flex gap-20 mb-10 flex-col lg:flex-row">
            <div className="w-full lg:w-4/12">
              <h3 className="text-rose-400 text-xl">ABOUT US</h3>
              <p className="text-3xl md:text-5xl ">
                We provide all kinds of fresh flower services
              </p>
            </div>
            <div className="w-full lg:w-8/12">
              <p className="text-xl text-gray-500">
                For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                Canada, growing flowers that can be dried and incorporated into
                late fall and winter floral arrangements has been a
                game-changer. During her growing season, this farmer-florist
                relies on a vivid palette of annuals, perennials and ornamental
                grasses to supply her studio.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-7/12 relative">
              <img
                src="./src/assets/media/about-girl.jpg"
                alt=""
                className="w-full"
              />
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
            </div>
            <div className="p-10 w-full lg:w-5/12 flex flex-col items-start gap-7 shadow-sm shadow-black lg:translate-y-minus-16 lg:translate-x-minus-16 bg-white">
              <p className="text-rose-400 text-2xl">
                Slow Flowers’ Floral Insights
              </p>
              <h2 className="text-3xl md:text-4xl">
                Dried flowers are having a renaissance
              </h2>
              <p className="text-gray-500 text-lg">
                This awareness has been stimulated by sustainable sourcing
                practices and the desire on the part of North American flower
                growers to “extend the season” beyond the last frost.
              </p>
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: 50 }}
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutUs;
