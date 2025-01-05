function OurServices() {
  return (
    <div className="container px-12 py-20 text-center">
      <h3 className="text-rose-400 text-xl">OUR SERVICES</h3>
      <p className="text-5xl">Florist's Services</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-16 mt-20">
        <div className="card border flex flex-col items-center gap-4 py-10 relative">
          <div className="imgWrapper absolute bottom-32 md:bottom-40 bg-white max-h-16">
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
        <div className="card border flex flex-col items-center gap-4 py-10 relative">
          <div className="imgWrapper absolute bottom-32 md:bottom-40 bg-white max-h-16">
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
        <div className="card border flex flex-col items-center gap-4 py-10 relative">
          <div className="imgWrapper absolute bottom-32 md:bottom-40 bg-white max-h-16">
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
    </div>
  );
}

export default OurServices;
