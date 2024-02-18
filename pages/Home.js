import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/Navbar'
import './Home.css'; 
import Card from '../components/Card.js';
import '../components/productListing-images/technology 1 (1).svg';
import brand3 from '../components/productListing-images/Vector (52).svg';
import  brand2 from '../components/productListing-images/fa-brands-2.svg';
import brand1 from '../components/productListing-images/Vector (51).svg';
import brand4 from '../components/productListing-images/Vector (53).svg';
import brand5 from '../components/productListing-images/Vector (54).svg';
import brand6 from '../components/productListing-images/Vector (55).svg';
import shopCard1 from '../components/productListing-images/shop_card1.svg';
import shopCard2 from '../components/productListing-images/shop_card2.svg';
import shopCard3 from '../components/productListing-images/shop_card3.svg';


const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className='main-container'>

          <div className='main-container-txt'>

                      <h5 className='main-t txt'>SUMMER 2020</h5>
                      <h1 className='txt'>NEW COLLECTION</h1>
                      <h4 className='main-para txt'>We know how large objects will act, <br/>
              but things on a small scale.</h4>

                      <button  className='shop-btn'>SHOP NOW</button>
          </div>

          <div className='main-img'>
                      <div className='first-circle-white circle'></div>
                      <div className='second-circle-white circle '></div>
                      <img src='technology 1 (1).svg'  alt=""/>
                      <div className='third-white-circle circle'></div>
                      <div className='first-cirlce-purple circle'></div>
                      <div className='second-white-circle circle'></div>

          </div>

      
    </div>
      <div className='brands'>
            <img src = {brand1}/>
            <img src = {brand2}/>
            <img src = {brand3}/>
            <img src = {brand4}/>
            <img src = {brand5}/>
            <img src = {brand6}/>
          </div>
    <div className='cards'>
    <div className='shop-card'>
          <div className='first-card-cont'>
                <img src = {shopCard1} className='card-img-size1'/>
                <div className = 'first-card' ><Card /></div>
          </div>

          {/* <div className='second-card-cont'>
          
                <img src={shopCard2} className='card-img-size2'/>
                <div shop-card3>
                <img src={shopCard3} className='card-img-size2'/>
                <div className = 'third-card' ><Card /></div>
                <div className = 'second-card' ><Card /></div>
                </div>
          </div> */}

          <div  className='second-card-container'>
            <div  className='second-card-cont'>
              <img src = {shopCard2} className='card-img-size2'/>
              <div className = 'second-card' ><Card /></div>
            </div>
            <div  className='third-card-cont'>
              <img src = {shopCard3} className='card-img-size2'/>
              <div className = 'third-card'  ><Card /></div>
            </div>
          </div>
    </div>
    </div>

    <Footer/>
      
    </div>
  )
}

export default Home
