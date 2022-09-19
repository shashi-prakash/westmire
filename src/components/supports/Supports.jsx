import React, { useEffect } from 'react';
import './supports.css';
import Aos from 'aos';

export default function Supports() {

  useEffect(() =>{
    Aos.init();
  })
  return (
    
    <>
     <section id="supports">
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-6 sm-padding">
                  <div className="support-text">
                    <h2 data-aos="fade-up">Expert Support</h2>
                    <p data-aos="fade-up">Faulty phone battery? Slow laptop? We have
                       in-house tech experts who can assist you.
                    </p>
                    <p data-aos="fade-up" className="visit">Visit us in sores!</p>
                  </div>
                  <div className="location">
                    <p className="location-text" data-aos="fade-up">
                        123 Anywhere St.<br/>
                        Any City, Sate, Any Country<br/>
                        (123) 4567890<br/><br />
                        123 Anywhere St.<br/>
                        Any City, State, Any Country<br/>
                        (123) 4567890

                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                    <div className="support-img" data-aos="fade-up">
                    <img src="./images/suport.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
     </section>
    </>
  )
}
