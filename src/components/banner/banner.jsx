import React, { useEffect } from 'react'
import './banner.css';
import Aos from 'aos';

export default function Banner() {
  useEffect(()=>{
    Aos.init();
  })
  return (
    < div className='banner'>
    

    <div className="homeLogo">Westmire Wired</div>
    <section id="hero" className="hero d-flex align-items-center section-bg">
    <div className="container">
      <div className="row justify-content-center gy-5">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start" style={{padding:"9% 0%"}}>
          <h2 data-aos="fade-up" className="body-top-text">The Westmire</h2>
          <h2 data-aos="fade-up" className="body-bottom-text">A56 Headset</h2>
          <div className="d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div className="button-section d-flex mt-4" data-aos="fade-up">
              <button className='home-button me-3'>Buy Now</button>
              <button className='home-button'>Shop All</button>
             </div>
           
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start" data-aos="fade-up">
          {/* <img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="img-fluid aos-init aos-animate" alt="" data-aos="zoom-out" data-aos-delay="300"/> */}
          <img src="./images/hero.png" className='heroImg'/>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
