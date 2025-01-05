function Features() {
  return (
    <div className="container px-12 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="flex items-start gap-4 justify-center">
          <img
            src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png"
            alt=""
          />
          <div className="cardContent">
            <h4 className="text-2xl">100% Freshness</h4>
            <p>Most people are unaware of the less common flower</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-center">
          <img
            src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png"
            alt=""
          />
          <div className="cardContent">
            <h4 className="text-2xl">Made by artist</h4>
            <p>Most people are unaware of the less common flower</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-center">
          <img
            src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png"
            alt=""
          />
          <div className="cardContent">
            <h4 className="text-2xl">Own courier</h4>
            <p>Most people are unaware of the less common flower</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-center">
          <img
            src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png"
            alt=""
          />
          <div className="cardContent">
            <h4 className="text-2xl">100% Freshness</h4>
            <p>Most people are unaware of the less common flower</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 py-12 ">
        <div className="relative ">
          <img
            src="./src/assets/media/categories-1.jpg"
            alt=""
            className="w-full"
          />
          <div className="text-center absolute bottom-2 mx-4 w-11/12 bg-white py-2">
            <p className="font-bold text-xl md:text-3xl">Fresh Flower</p>
            <p className="text-secondary">(25 items)</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="./src/assets/media/categories-2.jpg"
            alt=""
            className="w-full"
          />
          <div className="text-center absolute bottom-2 mx-4 bg-white w-11/12 py-2">
            <p className="font-bold text-xl md:text-3xl">Succulent plants</p>
            <p className="text-secondary">(162 items)</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="./src/assets/media/categories-3.jpg"
            alt=""
            className="w-full"
          />
          <div className="text-center absolute bottom-2 mx-4 bg-white w-11/12 py-2">
            <p className="font-bold text-xl md:text-3xl">Cactus plants</p>
            <p className="text-secondary">( 58 items )</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="./src/assets/media/categories-4.jpg"
            alt=""
            className="w-full"
          />
          <div className="text-center absolute bottom-2 mx-4 bg-white w-11/12 py-2">
            <p className="font-bold text-xl md:text-3xl">Funiture tree </p>
            <p className="text-secondary">(25 items)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
