function FooterNav() {
  return (
    <div className="container px-12 py-10 flex items-start justify-between gap-10 flex-wrap border-y-2 ">
      <div className="flex flex-col items-start gap-5 ">
        <h1 className="text-3xl">Company</h1>
        <ul className="flex flex-col gap-3 text-gray-400">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-5 xl:border-r-2 xl:pr-20">
        <h1 className="text-3xl">Account</h1>
        <ul className="flex flex-col gap-3 text-gray-400">
          <li>
            <a href="#">My Cart</a>
          </li>
          <li>
            <a href="#">Whislist</a>
          </li>
          <li>
            <a href="#">Login/Register</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-5 max-w-xs xl:border-r-2 xl:pr-20">
        <h1 className="text-3xl">Newsletter</h1>
        <p className="text-gray-500 ">
          Subcribe to our newsletter to get more free tips. No Spam, Promise.
        </p>
        <form className="flex border-b-2 border-black">
          <input
            type="text"
            className="outline-none  px-2"
            placeholder="Email"
          />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-3xl">Get in touch</h1>
        <p className="text-gray-500">69 North Cleveland Street, Memphis,USA.</p>
        <p className="text-gray-500">(123) 8111 9210 - (012) 1111 6868</p>
        <p className="text-gray-500">Florisr@supportthem.com</p>
      </div>
    </div>
  );
}

export default FooterNav;
