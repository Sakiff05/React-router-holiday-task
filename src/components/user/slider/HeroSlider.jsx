import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "@mui/material/Button";
import styles from "./HeroSlider.module.css";

function HeroSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      style={{
        marginTop: "3rem",
      }}
    >
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 72px)",
          paddingInline: "1rem",
        }}
        className={styles.sliderBack}
      >
        <div
          className={`${styles.sliderContent} w-3/4 md:w-1/2 flex flex-col items-center gap-2`}
        >
          <p className="text-xl">FRESH FLOWER & GIFT SHOP</p>
          <h1 className="text-4xl">
            Making beautiful flowers a part of your life
          </h1>
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: 50 }}
          >
            Shop Now
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 72px)",
          paddingInline: "1rem",
        }}
        className={styles.sliderBack2}
      >
        <div
          className={`${styles.sliderContent} w-3/4 md:w-1/2 flex flex-col items-center gap-2`}
        >
          <p className="text-xl">FRESH FLOWER & GIFT SHOP</p>
          <h1 className="text-4xl">
            Making beautiful flowers a part of your life
          </h1>
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: 50 }}
          >
            Shop Now
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;
