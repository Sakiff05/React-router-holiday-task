function AdminDetailCard({ flower }) {
  return (
    <div className="relative group container px-12 ">
      <div className="flex items-center flex-wrap gap-20 p-2 border">
        <div className="overflow-hidden relative w-full lg:max-w-sm lg:w-4/12 px-10 border ">
          <img src={`${flower.img}`} alt="" className="w-full" />
        </div>
        <div className="content flex flex-col w-full lg:w-6/12 items-center gap-5">
          <p className="text-xl">
            <span className="text-rose-500 font-bold">Type:</span> {flower.type}
          </p>
          <p className="text-xl text-center">
            <span className="text-rose-500 font-bold">Descripion:</span>{" "}
            {flower.description}
          </p>
          <p className="text-xl font-bold text-center">${flower.price}</p>
        </div>
        <div
          className={`absolute bg-black top-12 left-12  max-h-8 text-white ${
            flower.new ? "p-1" : ""
          }`}
        >
          {flower.new ? "NEW" : ""}
        </div>
        <div
          className={`absolute bg-black top-12 left-12  max-h-8 text-white ${
            flower.outOfStock ? "p-1" : ""
          }`}
        >
          {flower.outOfStock ? "OUT OF STOCK" : ""}
        </div>
      </div>
    </div>
  );
}

export default AdminDetailCard;
