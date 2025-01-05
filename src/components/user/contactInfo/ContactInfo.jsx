import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container px-12 py-12">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-5xl">Get in touch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et
          dolore.
        </p>
        <ul className="flex flex-col items-start jusify-center gap-5">
          <li className="flex items-center gap-5">
            <LocationOnIcon className="text-rose-500" />
            69 North Cleveland Street, Memphis,USA.
          </li>
          <li className="flex items-center gap-5">
            <PhoneIcon className="text-rose-500" />
            (123) 8111 9210 - (012) 1111 6868
          </li>
          <li className="flex items-center gap-5">
            <EmailIcon className="text-rose-500" /> Florisr@supportthem.com
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-5xl">Contact Us</h1>
        <form>
          <input
            type="email"
            className="px-2 py-3 border w-full"
            placeholder="Email"
          />

          <textarea
            className="w-full h-28 mt-5 p-2 border"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 mt-5 text-xl uppercase"
          >
            Send
          </button>
        </form>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d98240.70301107646!2d-86.392669!3d39.69421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1735987797485!5m2!1sen!2sbd"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-w-full"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactInfo;
