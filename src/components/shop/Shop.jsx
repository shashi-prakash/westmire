import React, { useEffect } from 'react'
import './shop.css'
import Aos from 'aos';

export default function Shop() {
    useEffect(() =>{
        Aos.init();
    });

  return (
      <>
      <section id="shop">
        <div className="container">
            <h2 className="text-center pt-5 mb-4 shop-by" data-aos="fade-up">Shop by category</h2>
            
            <div className="shop-item-container justify-content-around" data-aos="fade-up">
                <div className="shop-item bg-white">
                    <div className="shop-item-img">
                        <img src="./images/shop1.png" alt="" />
                    </div>
                    <div className="shop-item-title  px-4 text-center">PHONES & ACCESSORIES</div>
                    <div className="shop-item-txt text-center px-4">High class, high quality
                    phones at affordable prices.</div>
                </div>
                <div className="shop-item bg-white">
                    <div className="shop-item-img">
                         <img src="./images/shop2.png" alt="" />
                    </div>
                    <div className="shop-item-title px-4 text-center">COMPUTER EQUIPMENT</div>
                    <div className="shop-item-txt px-4 text-center">All your desktop or laptop needs
                    made available</div>
                </div>
                <div className="shop-item bg-white">
                    <div className="shop-item-img">
                         <img src="./images/shop3.png" alt="" />
                    </div>
                    <div className="shop-item-title px-4 text-center">MISCELLANEOUS ITEMS</div>
                    <div className="shop-item-txt px-4 text-center">We've got more stuff to meet
                    your techie</div>
                </div>

            </div>
            <div className="shop-all text-center">
                  <button className='shop-all-button'>Shop All</button>
            </div>
        </div>
        
      </section>
      </>
  )
}
