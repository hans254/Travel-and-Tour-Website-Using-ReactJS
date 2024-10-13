import React, {useEffect} from 'react'
import './Footer.css'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import video2 from '../../Assets/video2.mp4';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    //React Hook to Add a Scroll Animation
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submt'>
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon"/> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptas ipsam dignissimos ut eos mollitia? Minima, saepe magni sint aperiam in at id voluptatum laborum explicabo, pariatur, accusamus ut nisi distinctio animi illum autem sunt doloremque? Sed obcaecati labore a quo autem excepturi voluptatibus nobis, dicta nam animi. Nihil, enim.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>

          {/* Group one */}
          <div data-aos="fade-up" data-aos-duration='4000' className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>
          </div>

          {/* Group two */}
          <div data-aos="fade-up" data-aos-duration='4000' className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago 
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor
              </li>
            </div>
          </div>

          {/* Group three */}
          <div data-aos="fade-up" data-aos-duration='5000' className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Carlifonia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Oceania 
              </li>
            </div>
          </div>

          <div data-aos="fade-up" className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - Dev. Hansel</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
