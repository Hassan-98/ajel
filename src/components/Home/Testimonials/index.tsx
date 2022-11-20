import React, { useState, useEffect } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Styles
import "./testimonials.scss";
import "swiper/css";
import 'swiper/css/autoplay';

const Testimonials: React.FC = () => {
  const { i18n, t: translate } = useTranslation();
  const [load, setLoad] = useState<Boolean>(false);

  useEffect(() => {
    setLoad(false);

    setTimeout(() => {
      setLoad(true);
    }, 0);
  }, [i18n.language]);

  return (
    <section className="Testimonials">
      <div className="container">
        <h3>{translate('Home/Testimonials/title')}</h3>
        <div className="info">
          <p>{translate('Home/Testimonials/description')}</p>
          <div className="swiper">
            {
              load && (
                <Swiper
                  slidesPerView={3}
                  dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={true}
                  breakpoints={{
                    992: {
                      slidesPerView: 3
                    },
                    768: {
                      slidesPerView: 2
                    },
                    0: {
                      slidesPerView: 1
                    }
                  }}
                >
                  <SwiperSlide>
                    <div className="item">
                      <p className='text'>{translate('Home/Testimonials/agentWords')}</p>
                      <div className="d-flex justify-content-between mt-4">
                        <div className="agent d-flex align-items-center">
                          <img src="/assets/images/User1.png" alt="user image" />
                          <div className="user">
                            <h4>{translate('Home/Testimonials/agent1')}</h4>
                            <p>{translate('Home/Testimonials/agentPosition')}</p>
                          </div>
                        </div>
                        <img src="/assets/images/quotes.svg" alt="quotes" className="quotes" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <p className='text'>{translate('Home/Testimonials/agentWords')}</p>
                      <div className="d-flex justify-content-between mt-4">
                        <div className="agent d-flex align-items-center">
                          <img src="/assets/images/User2.png" alt="user image" />
                          <div className="user">
                            <h4>{translate('Home/Testimonials/agent2')}</h4>
                            <p>{translate('Home/Testimonials/agentPosition')}</p>
                          </div>
                        </div>
                        <img src="/assets/images/quotes.svg" alt="quotes" className="quotes" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <p className='text'>{translate('Home/Testimonials/agentWords')}</p>
                      <div className="d-flex justify-content-between mt-4">
                        <div className="agent d-flex align-items-center">
                          <img src="/assets/images/User3.png" alt="user image" />
                          <div className="user">
                            <h4>{translate('Home/Testimonials/agent3')}</h4>
                            <p>{translate('Home/Testimonials/agentPosition')}</p>
                          </div>
                        </div>
                        <img src="/assets/images/quotes.svg" alt="quotes" className="quotes" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials