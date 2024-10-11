import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof='video/mp4'></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">Search your Holiday</h1>
        </div>
      </div>
    </section>
  )
}

export default Home
