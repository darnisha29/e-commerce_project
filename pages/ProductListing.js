import React from 'react'
import { useState } from 'react'
import './ProductListing.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from 'react-slick';
import data from '../data'
import shopIcon from '../components/productListing-images/Vector (56).svg';
import Slidercard from '../components/Slidercard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import filterIcon from "../components/productListing-images/Vector (57).svg";
import RangeSlider from '../components/RangeSlider';
import Brands from '../components/Brand'
import { IoIosArrowBack } from "react-icons/io";
import Brand from '../components/Brand'


const ProductListing = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
  
  return (
    <div>
    <Navbar/>

    <div className='shop'>
      <h4>Shop</h4>
      <div className='shop-icon'>
        <h5>Home</h5>
        <img src = {shopIcon}/>
        <h5>Shop</h5>
      </div>
    </div>

    <div className='slider-container'>
    <Slider {...settings} className='sliding'>
          {
            data.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt={`Shop ${item.id}`} />
              </div>
            );
          })}

    </Slider>
    </div>
          

        <div className='Filter-container'>
          <div className='filter'>
              <div className='filter-by' >
                <img src= {filterIcon}/> <span>All Categories</span>
                <div>
                  <p>All Men's Clothing</p>
                  <p>Women's Clothing</p>
                  <p>Footwear</p>
                  <p>Watches</p>
                  <p>Beauty</p>
                  <p>Kid's clothing</p>
                  <p>Hand bags</p>
                  <p>Jwellery</p>
                </div> 
              </div>
              <div className='price'>
                <h3>Price</h3>
                <RangeSlider/>
                
              </div>
              <div className='Brands'>
              <h3> Brands</h3>
              <Brand />
              </div>
              
          </div>
          <div className='filtered-content'>
          
          
          
          </div>
              
        </div>
          

    <Footer/>
      
    </div>
  )
}

export default ProductListing
