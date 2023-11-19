import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import bannerImg from "../../../assets/banner.webp"
import banner1 from "../../../assets/banner1.webp"


const banner = [
  {
    link: "/products",
    image: banner1
  },
  {
    link: "/products",
    image: banner1
  },
  {
    link: "/products",
    image: banner1
  },
  {
    link: "/products",
    image: banner1
  },
]

const Banner = () => {

  return (
    <>
      <Swiper
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Pagination, Autoplay, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {banner?.map((e, i) => {
          return (
            <SwiperSlide data-hash="" key={`ban${i}`}>
              <Link to={e.link}>
                <img
                  draggable={false}
                  style={{ width: "100%", height: "100%"}}
                  src={e?.image}
                  alt="banner"
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
