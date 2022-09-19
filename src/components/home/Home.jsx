import React from 'react'
import Banner from '../banner/banner';
import About from '../about/About';
import Shop from '../shop/Shop';
import Supports from '../supports/Supports';
import Contact from '../contact/Contact';
import './home.css';


export default function Home() {
  return (
    <>
    <Banner/>
    <About/>
    <Shop/>
    <Supports/>
    <Contact/>
  
    </>
  )
}
