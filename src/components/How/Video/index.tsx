import React, { useState } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./video.scss";

const Video: React.FC = () => {
  const { i18n, t: translate } = useTranslation();
  const [isOpen, setOpen] = useState<Boolean>(false);

  return (
    <section className="video">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-md-6 col-12">
            <div className="details">
              <h2 className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('HowTo/Video/title')}</h2>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('HowTo/Video/description1')}</p>
              <p className="wow animate__fadeInUp d-none d-lg-block" data-wow-duration="0.5s">{translate('HowTo/Video/description2')}</p>
              <button className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('HowTo/Video/btn')}</button>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.6s">
            <div className={`image ${i18n.language}`}>
              <div className="icon" onClick={() => setOpen(true)}>
                <i className="fa-solid fa-play"></i>
              </div>
              <img src="/assets/images/video.jpg" alt="section image" />
            </div>
          </div>
        </div>
      </div>
      {
        isOpen && (
          <div className="iframe" onClick={() => setOpen(false)}>
            <iframe src="https://www.youtube.com/embed/kBCR-gm058M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        )
      }
    </section>
  )
}

export default Video