import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./Quotes.module.css";
function Quotes() {
  return (
    <div className={`${styles.customBg} mt-10`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="container px-12 py-12 flex flex-col items-center gap-5">
            <img
              src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png"
              alt="quote"
            />
            <p className="text-2xl">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              corrupti nobis, cupiditate doloremque error, voluptate, tempora
              beatae dolorum illum doloribus fugit ex optio unde deleniti
              distinctio nostrum quis. Perspiciatis, corrupti? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Deleniti corporis
              voluptatum dolorum ratione doloribus a quod, nemo veniam quae
              magnam? "
            </p>
            <h1 className="text-xl">Alejandro Houston</h1>
            <span className="text-gray-400">Bussinessman</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container px-12 py-12 flex flex-col items-center gap-5">
            <img
              src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png"
              alt="quote"
            />
            <p className="text-2xl">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              corrupti nobis, cupiditate doloremque error, voluptate, tempora
              beatae dolorum illum doloribus fugit ex optio unde deleniti
              distinctio nostrum quis. Perspiciatis, corrupti? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Deleniti corporis
              voluptatum dolorum ratione doloribus a quod, nemo veniam quae
              magnam? "
            </p>
            <h1 className="text-xl">Victor Salamanski</h1>
            <span className="text-gray-400">Bussinessman</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container px-12 py-12 flex flex-col items-center gap-5">
            <img
              src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png"
              alt="quote"
            />
            <p className="text-2xl">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              corrupti nobis, cupiditate doloremque error, voluptate, tempora
              beatae dolorum illum doloribus fugit ex optio unde deleniti
              distinctio nostrum quis. Perspiciatis, corrupti? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Deleniti corporis
              voluptatum dolorum ratione doloribus a quod, nemo veniam quae
              magnam? "
            </p>
            <h1 className="text-xl">Pieruere Andersson</h1>
            <span className="text-gray-400">Bussinessman</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Quotes;
