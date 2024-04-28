import { Swiper, SwiperSlide } from "swiper/react";


import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
    const [sliders, setSliders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/slider')
            .then(res => res.json())
            .then(data => setSliders(data))
    }, [])
    return (
        <div className="z-0 lg:mt-20">
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 2000,

                }}
            >

                {
                    sliders.map(slide => <SwiperSlide
                    key={slide._id}
                    >
                        <div className="hero h-[560px] bg-base-200 mb-20">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={slide.image} className=" h-[300px] w-[350px] lg:w-[450px] rounded-lg shadow-2xl" />
                                <div className="inter">
                                    <h1 className="text-5xl font-bold">You may travel <span className="text-rose-400">to this place !</span></h1>
                                    <p className="py-2 text-xl font-medium">{slide.place_country}</p>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Slider;