import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Swiper CSS (অবশ্যই এগুলো ইমপোর্ট করবেন)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './swiper.css';

const SwiperHero = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect={'fade'} // ওভারল্যাপ এড়াতে এবং স্মুথ ট্রানজিশনের জন্য
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {/* Slide 1: Original Concept with BG */}
        <SwiperSlide 
          className="hero-slide" 
          style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.9) 30%, rgba(76,175,80,0.2) 100%), url('/images/hero-image.png')` }}
        >
          <div className="container hero-container">
            <div className="hero-content">
              <h1>Fresh Fruits <br></br> Best Food</h1>
              <p>
                Hossain Ali Food and Beverage Ltd brings you the freshest <br></br> and most delicious fruits from around the world.
              </p>
              <div className="hero-buttons">
                <Link to="/explore" className="btn btn-primary">Explore Products</Link>
                <Link to="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Quality Slide with BG */}
        <SwiperSlide 
          className="hero-slide" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hafbl-hero.webp')` }}
        >
          <div className="container hero-container justify-center text-center">
            <div className="hero-content full-width">
              <h1 className="white-text">Quality Food, Happy Life</h1>
              <p className="white-text">We ensure the best quality for your family. Healthy food for a healthy nation.</p>
  
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperHero;
