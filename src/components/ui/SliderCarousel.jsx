"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { Button } from './button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const SliderCarousel = () => {
    const slides = [
        {
          image: '/hero1.jpg',
          title: <div><h2 className='text-yellow-500'>Experience the Happiness of</h2> Healthy Sheep in Our Care!</div>,
          subTitle: 'Joyful and Thriving',
          description: 'A Heritage Breed Known for Their Sociable Nature and Easy-to-Handle Temperament!',
          buttonText: 'Shop softest yarn',
          buttonLink: '#'
        },
        {
          image: 'https://images.pexels.com/photos/710263/pexels-photo-710263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'Slide 2 Title',
          subTitle: 'Sub Title 2',
          description: 'This is the second slide.',
          buttonText: 'Visit Farm',
          buttonLink: '#'
        },
        {
          image: 'https://images.pexels.com/photos/688618/pexels-photo-688618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'Slide 2 Title',
          subTitle: 'Sub Title 2',
          description: 'This is the second slide.',
          buttonText: 'Learn More',
          buttonLink: '#'
        },
       
        // Add more slides as needed
      ];
    
      return (
        <div className="relative w-full h-[22rem] md:h-[34rem]">
          <Swiper
          slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            // pagination={true}
            // navigation={false}
            className="mySwiper h-full"
            modules={[Pagination,Navigation,Autoplay]}
            navigation={{
              nextEl: '.forward',
              prevEl: '.back',
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className='h-full' >
                <div
                  className="w-full h-full bg-cover bg-center flex items-center px-8 md:px-20"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="text-left text-white w-3/4 md:w-2/3">
                  <h6 className="mb-4 text-white font-medium text-sm md:text-xl">{slide.subTitle}</h6>
                    <h2 className="text-2xl md:text-6xl font-semibold mb-4 leading-tight">{slide.title}</h2>
                    <h6 className="mb-4 text-white text-sm md:text-base hidden md:block">{slide.description}</h6>
                    <Button
                      href={slide.buttonLink}
                      variant="outline"
                      className="px-6 py-2 border-none text-gray-800 uppercase font-medium hover:bg-blue-700 hover:text-white hover:border-none text-xs md:text-sm rounded-xl"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="back text-gray-400 hover:text-gray-200 backdrop-blur-sm p-2  hover:bg-white/10 rounded-full absolute top-1/2 left-6 z-10 hidden md:block">
          <IoIosArrowBack className='size-5'/>
          </button>
          <button className="forward text-gray-400 hover:text-gray-200 backdrop-blur-sm p-2  hover:bg-white/10 rounded-full absolute top-1/2 right-6 z-10 hidden md:block">
          <IoIosArrowForward className='size-5'/>
          </button>
        </div>
      );
    };

    
export default SliderCarousel;
