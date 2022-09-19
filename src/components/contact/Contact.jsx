import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    
    <>
     <section id="contact">
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-8">
                  <div className="support-text">
                    <h2>Connect with us</h2>
                  </div>
                </div>
                <div className="col-md-2">
                    <div className="list-item">MAIN OFFICE
                    <ul>
                        <li>123 Anywhere St.</li>
                        <li>Ant City, State</li>
                        <li>Any Country</li>
                        <li>(123) 4567890</li>
                    </ul>
                    </div>
                   
                </div>
                <div className="col-md-2">
                    <div className="list-item">SOCIAL MEDIA
                    <ul className='ul-contact'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                    </div>
                </div>

            </div>
        </div>
     </section>
    </>
  )
}
