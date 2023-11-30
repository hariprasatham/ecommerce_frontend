
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Banner1 from "@/assets/images/1.avif";
import Banner2 from "@/assets/images/2.avif";
import Banner3 from "@/assets/images/3.avif";

function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}>
        <SwiperSlide>
          <img src={Banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
