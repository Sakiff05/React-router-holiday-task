import InstagramIcon from "@mui/icons-material/Instagram";

function FooterCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-3 container px-3 ">
      <div className="card group relative">
        <img src="./src/assets/media/insta-1.jpg" alt="" className="w-full" />
        <div className="w-full bg-white flex flex-col items-center absolute bottom-1/3 opacity-0 group-hover:opacity-100 transition-opacity">
          <InstagramIcon sx={{ color: "violet" }} />
          <p>Follow Us</p>
          <a>@Florist</a>
        </div>
      </div>
      <div className="card group relative">
        <img src="./src/assets/media/insta-2.jpg" alt="" className="w-full" />
        <div className="w-full bg-white flex flex-col items-center absolute bottom-1/3 opacity-0 group-hover:opacity-100 transition-opacity">
          <InstagramIcon sx={{ color: "violet" }} />
          <p>Follow Us</p>
          <a>@Florist</a>
        </div>
      </div>
      <div className="card group relative">
        <img src="./src/assets/media/insta-3.jpg" alt="" className="w-full" />
        <div className="w-full bg-white flex flex-col items-center absolute bottom-1/3 opacity-0 group-hover:opacity-100 transition-opacity">
          <InstagramIcon sx={{ color: "violet" }} />
          <p>Follow Us</p>
          <a>@Florist</a>
        </div>
      </div>
      <div className="card group relative">
        <img src="./src/assets/media/insta-4.jpg" alt="" className="w-full" />
        <div className="w-full bg-white flex flex-col items-center absolute bottom-1/3 opacity-0 group-hover:opacity-100 transition-opacity">
          <InstagramIcon sx={{ color: "violet" }} />
          <p>Follow Us</p>
          <a>@Florist</a>
        </div>
      </div>
      <div className="card group relative">
        <img src="./src/assets/media/insta-5.jpg" alt="" className="w-full" />
        <div className="w-full bg-white flex flex-col items-center absolute bottom-1/3 opacity-0 group-hover:opacity-100 transition-opacity">
          <InstagramIcon sx={{ color: "violet" }} />
          <p>Follow Us</p>
          <a>@Florist</a>
        </div>
      </div>
    </div>
  );
}

export default FooterCards;
