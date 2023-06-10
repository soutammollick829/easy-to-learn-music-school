import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import bannerImg1 from "../../../assets/imags/bannar cover img/240_F_93107405_5NUyoTA5sEvApqbqHOal4tjkwaVktDGp.jpg";
import bannerImg2 from "../../../assets/imags/bannar cover img/1000_F_80069265_3GR0buX0Hv2ciDyXWQBARpo7VET6bzlV.jpg";
import bannerImg3 from "../../../assets/imags/bannar cover img/1000_F_94702863_BS6eXcUhfCjDdlJP3VfXIX8qvNKUVquW.jpg";
import bannerImg4 from "../../../assets/imags/bannar cover img/blog1-768x512.jpg";
import bannerImg5 from "../../../assets/imags/bannar cover img/symphony-orchestra-performance-string-section_738298-1573.jpg";
import { Bounce, Flip} from "react-awesome-reveal";

const BannarCarusel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={bannerImg1} alt="" />
            <div className="absolute top-40 left-60 text-white">
              <h3 className="font-serif text-4xl font-bold text-[#efcf4f]">
                Playing Drum
              </h3>
              <h1 className="font-serif text-7xl font-bold text-white">
                Realy Easy
              </h1>
              <p className="mt-5">
                Pellentesque mattis mauris ac tortor volutpat, eu fermentum
                sapien euismod. <br /> In id tempus metus. Donec eu volutpat
                nibh, in maximus ligula.
              </p>
              <button className="btn mt-5 bg-[#c25934] border-0">
                read more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={bannerImg2} alt="" />
            <div className="absolute top-40 left-60 text-white">
              <h3 className="font-serif text-4xl font-bold text-[#efcf4f]">
                Playing Guitar
              </h3>
              <h1 className="font-serif text-7xl font-bold text-white">
                Realy Easy
              </h1>
              <p className="mt-5">
                Pellentesque mattis mauris ac tortor volutpat, eu fermentum
                sapien euismod. <br /> In id tempus metus. Donec eu volutpat
                nibh, in maximus ligula.
              </p>
              <button className="btn mt-5 bg-[#c25934] border-0">
                read more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={bannerImg3} alt="" />
            <div className="absolute top-40 left-60 text-white">
              <h3 className="font-serif text-4xl font-bold text-[#efcf4f]">
                Playing Piano
              </h3>
              <h1 className="font-serif text-7xl font-bold text-white">
                Realy Easy
              </h1>
              <p className="mt-5">
                Pellentesque mattis mauris ac tortor volutpat, eu fermentum
                sapien euismod. <br /> In id tempus metus. Donec eu volutpat
                nibh, in maximus ligula.
              </p>
              <button className="btn mt-5 bg-[#c25934] border-0">
                read more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={bannerImg4} alt="" />
            <div className="absolute top-40 left-60 text-white">
              <h3 className="font-serif text-4xl font-bold text-[#efcf4f]">
                Playing Guitar
              </h3>
              <h1 className="font-serif text-7xl font-bold text-white">
                Realy Easy
              </h1>
              <p className="mt-5">
                Pellentesque mattis mauris ac tortor volutpat, eu fermentum
                sapien euismod. <br /> In id tempus metus. Donec eu volutpat
                nibh, in maximus ligula.
              </p>
              <button className="btn mt-5 bg-[#c25934] border-0">
                read more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={bannerImg5} alt="" />
            <div className="absolute top-40 left-60 text-white">
              <h3 className="font-serif text-4xl font-bold text-[#efcf4f]">
                Playing Violin
              </h3>
              <h1 className="font-serif text-7xl font-bold text-white">
                Realy Easy
              </h1>
              <p className="mt-5">
                Pellentesque mattis mauris ac tortor volutpat, eu fermentum
                sapien euismod. <br /> In id tempus metus. Donec eu volutpat
                nibh, in maximus ligula.
              </p>
              <button className="btn mt-5 bg-[#c25934] border-0">
                read more
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="bg-[#efcf4f] text-center h-80 mx-16 p-5 space-y-5 mt-20 rounded-lg">
        <Flip>
        <h3 className="font-bold text-2xl text-[#c25934]">Opening Offer</h3>
        </Flip>
        <Bounce>
        <h1 className="uppercase font-extrabold text-7xl text-white">
          GET A FREE LESSON
        </h1>
        </Bounce>
        <h3 className="font-bold text-2xl text-[#0c4b65]">
          Bring your children to a trial lesson to find out how much they enjoy
          doing music or singing
        </h3>
        <div className="space-x-10">
          <button className="btn text-white border-0 hover:text-black bg-[#0c4b65]">Get started</button>
          <button className="btn text-white border-0 hover:text-black bg-[#c25934]">choose class</button>
        </div>
      </div>
    </div>
  );
};

export default BannarCarusel;
