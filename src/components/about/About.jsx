import React, { useEffect } from 'react';
import Aos from 'aos';
import './about.css'

export default function About() {
  useEffect(() =>{
    Aos.init({duration:1000});
  })
  return (
    <>
     <section id="about" className="hero d-flex align-items-center section-bg ">
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up" className="aos-init aos-animate about-top-text">All-new technology</h2>
          <p data-aos="fade-up" className="aos-init aos-animate about-bottom-text">
          News write-ups offer a great way to let clients
            know about new products and service, events,
            awards, and more.News write-ups offer a great way
            to let clients know about new products and services,
            events, awards, and more.
          </p>
          <div className="d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
         
           
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src="./images/about.png" className='heroImg'/>
        </div>
      </div>
    </div>
  </section>
    </>
    
  )
}
