import React, {useEffect} from 'react'
import './Home.css'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import video1 from '../../Assets/video1.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  //React Hook to Add a Scroll Animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="home">
      <div className="overlay"></div>
      {/* Corrected video1 */}
      <video src={video1} muted autoPlay loop typeof='video/mp4'></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">Search your Holiday</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            {/* Added id for input and matched with label htmlFor */}
            <label htmlFor="city">Search your destination: </label>
            <div className="input flex">
              <input id="city" type="text" placeholder='Enter name here...'/>
              <GrLocation className="icon"/>
            </div>
          </div>

          <div className="dateInput">
            {/* Added id for input and matched with label htmlFor */}
            <label htmlFor="date">Select your date: </label>
            <div className="input flex">
              <input id="date" type="date"/>
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              {/* Added id for input and matched with label htmlFor */}
              <input id="price" type="range" max="5000" min="1000"/>
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <FaInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>

          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
