import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";


function Freebook() {

  const [book, setBook]= useState([]);
  useEffect(()=>{
    const getBook = async()=> {
      try {
        const res = await axios.get("http://localhost:4001/book");
        
        const data = res.data.filter((data)=>data.category==="Free");
        setBook(data);
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[]);

  
  //  Slick Slider Setting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // Slick Slider Setting ends

  return (<>
    <div className='max-w-screen-2xl container mb-10 mx-auto md:px-20 px-4'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam magni sed, officiis quae, a voluptate aspernatur ut sapiente, atque quia dolores corporis?</p>
      </div>
    

      <div>
        <a href="../public/It-ends-with-us.pdf" target="_blank">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </a>
      </div>
    </div>
    </>)
}

export default Freebook