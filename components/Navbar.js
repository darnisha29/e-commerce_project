import React, { useState } from 'react'
import './Navbar.css';
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { CgFormatJustify } from "react-icons/cg";



const Navbar = () => {
  const [dropdownmenu,setDropdownmenu] = useState(false);
  
  function dropdownMenu() {
    // console.log("clicked....");
    if(!dropdownmenu){
      setDropdownmenu(true)
      console.log(dropdownmenu); 
    }
    else{
      setDropdownmenu(false);
    }
  }
  return (
    <div>
       <div className='nav' id ='navbar'>
            <div className='call'>
              <div><IoCallOutline size={18} /></div>
              <p>(225) 555-0118</p>
            </div>

            <div className='mail'>
            <div><TfiEmail size={14} /></div>
              <div><p>michelle.rivera@example.com</p></div>
            </div>

            <div>
              <p>Follow Us  and get a chance to win 80% off</p>
            </div>

            <div className='follow-us'>
              <p>Follow Us  :</p>
              <div className='follow-us-img'>
              <FaInstagram size={18} />
              <FaYoutube size={18} />
              <LiaFacebook size={24} />
              <FaTwitter size={18} />
              </div>
            </div>

       </div>
       <div className='second-nav'>
        <div className='logo'>
          <h3>Bandeg</h3>
        </div>

        <div className='links'>
            <p>Home</p>
            <div>
            <select className="p-shop" name="shop" id="shop" >
                    <option value="volvo">A</option>
                    <option value="saab">B</option>
                    <option value="mercedes">C</option>
                    <option value="audi">D</option>
                  </select>
                  </div>
              <div className='link' >
              <div><p>About</p> </div>
              <div><p>Blog</p> </div>
              <div><p>Contact</p> </div>
              <div><p>Pages</p></div>
              </div>

              
              
        </div>

        <div className='login-register'>
                <p>Login / Register</p>
                <CiSearch/>
                <BsCart />
                <MdFavoriteBorder/>
              </div>
       </div>

      <div className="nav-for-mob">
        <div>
          <h3>Bandage</h3>
        </div>
          <div>
          <button onClick={dropdownMenu}>
          <CgFormatJustify  />
          </button>
            
           
          </div>
      </div>
        {dropdownmenu  ? (
          <div className='second-nav-mob'>
        <div className='links-mob'>
        <div>
            <p>Home</p>
            
            <select className="p-shop-mob" name="shop" id="shop" >
                    <option value="volvo">shop</option>
                    <option value="saab">B</option>
                    <option value="mercedes">C</option>
                    <option value="audi">D</option>
                  </select>
                  </div>
              <div className='link-mob' >
              <div><p>About</p> </div>
              <div><p>Blog</p> </div>
              <div><p>Contact</p> </div>
              <div><p>Pages</p></div>
              </div>      
        </div>

        <div className='login-register-mob'>
                <p>Login / Register</p>
                <CiSearch/>
                <BsCart />
                <MdFavoriteBorder/>
              </div>
       </div>
        ) : null}

    </div>

  )

}

export default Navbar
