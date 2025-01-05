import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
function FooterLinks() {
  return (
    <div className="container px-12 py-10 flex flex-wrap justify-between items-center gap-y-10">
      <img
        src="https://preview.colorlib.com/theme/florist/img/logo.png"
        alt="florist-logo"
      />
      <p className="text-xl">
        The floristry business has a significant market in the corporate and
        social event world, as flowers
      </p>
      <div className="links flex items-center">
        <IconButton>
          <FacebookIcon className="text-black" />
        </IconButton>
        <IconButton>
          <InstagramIcon className="text-black" />
        </IconButton>
        <IconButton>
          <XIcon className="text-black" />
        </IconButton>
        <IconButton>
          <LinkedInIcon className="text-black" />
        </IconButton>
      </div>
    </div>
  );
}

export default FooterLinks;
