import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
function TeamMembers() {
  return (
    <div className="container px-12 py-12">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-rose-400 text-xl">OUR TEAM MEMBERS</h3>
          <p className="text-3xl md:text-5xl ">Flower Experts</p>
        </div>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 50,
            paddingBlock: "0.8rem",
            fontSize: "1.2rem",
            borderColor: "rgb(255, 96, 123)",
            color: "rgb(255, 96, 123)",
          }}
          size="large"
        >
          Meet our team
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div className="card shadow">
          <div className="imgWrapper">
            <img
              src="https://preview.colorlib.com/theme/florist/img/team/team-1.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="card-content flex flex-col items-center py-5">
            <h1 className="text-3xl">Richard Osborne</h1>
            <p className="text-rose-500 text-xl">Manager</p>
            <div className="links flex items-center">
              <IconButton>
                <FacebookIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <InstagramIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <XIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className="text-gray-500" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="card shadow">
          <div className="imgWrapper">
            <img
              src="https://preview.colorlib.com/theme/florist/img/team/team-2.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="card-content flex flex-col items-center py-5">
            <h1 className="text-3xl">Richard Osborne</h1>
            <p className="text-rose-500 text-xl">Manager</p>
            <div className="links flex items-center">
              <IconButton>
                <FacebookIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <InstagramIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <XIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className="text-gray-500" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="card shadow">
          <div className="imgWrapper">
            <img
              src="https://preview.colorlib.com/theme/florist/img/team/team-3.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="card-content flex flex-col items-center py-5">
            <h1 className="text-3xl">Richard Osborne</h1>
            <p className="text-rose-500 text-xl">Manager</p>
            <div className="links flex items-center">
              <IconButton>
                <FacebookIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <InstagramIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <XIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className="text-gray-500" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="card shadow">
          <div className="imgWrapper">
            <img
              src="https://preview.colorlib.com/theme/florist/img/team/team-4.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="card-content flex flex-col items-center py-5">
            <h1 className="text-3xl">Richard Osborne</h1>
            <p className="text-rose-500 text-xl">Manager</p>
            <div className="links flex items-center">
              <IconButton>
                <FacebookIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <InstagramIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <XIcon className="text-gray-500" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className="text-gray-500" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
