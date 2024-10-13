import React, {useEffect} from 'react'
import './Main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboard } from "react-icons/hi2";
import img from '../../Assets/img.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =   [ 
  {
    id: 1,
    imgSrc: img,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for it luxurious stays and adventurous activities.'
  },

  {
    id: 2,
    imgSrc: img2,
    desTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This plae is popular among tourists as the sunrise from the Sun Gate is simply spectacular'
  },

  {
    id: 3,
    imgSrc: img3,
    desTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty". Always intresting to be in this place '
  },

  {
    id: 4,
    imgSrc: img4,
    desTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the World Tourism Ranking, 45 million people visit Turkey each year, and from that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id: 5,
    imgSrc: img5,
    desTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in Central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The house in the city are very attractively paint with the most bright colors available. Always welcome.'
  },

  {
    id: 6,
    imgSrc: img6,
    desTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will  be exhilarated with the choice you are about to get here. Happy exploring great food!'
  },

  {
    id: 7,
    imgSrc: img7,
    desTitle: 'Angkor',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkot what represent the entire range of Khamer art from the 9th to the 15th centuary. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id: 8,
    imgSrc: img8,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for it luxurious stays and adventurous activities.'
  },

  {
    id: 9,
    imgSrc: img9,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for it luxurious stays and adventurous activities.'
  },
]


const Main = () => {
    //React Hook to Add a Scroll Animation
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  return (
    <section  className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {/*We're going to use higher order array method (map)*/}
        {
          Data.map(({id, imgSrc, desTitle, Location, grade, fees, description})=>{
            return(
              <div key={id} className="singleDestination">
                {/* Here it will return single  */}
                <div className="imageDiv">
                  <img src="{imgSrc}" alt={desTitle} />
                </div>
                  <div className="cardInfo">
                    <h4 className="desTitle">{desTitle}</h4>
                    <span data-aos="fade-up" className="container flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div data-aos="fade-up" className="fees flex">
                      <div className="grade">
                        <span>{grade} <small>+1</small> </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button data-aos="fade-up" className="btn flex">
                      DETAILS <HiOutlineClipboard className="icon"/>
                    </button>
                  </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Main
