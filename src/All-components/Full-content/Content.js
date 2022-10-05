import "./content.css";



import React, { useEffect, useState } from "react";

import logo from '../images/logo.png'
import RightProfile from "../right-profile/profile";
import FoodCard from "../food-card/card";
import Blog from "../blog/blog";

const Fullcontent = () => {
    const [starInfo, setStarInfo ] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('foodData.json')
        .then(res => res.json())
        .then(data => setStarInfo(data))
    },[])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

  return (
    <div className="tree">

    <div className="container-main grid md:grid-cols-4 grid-cols-1  gap-4">
      <div className="card-container col-span-3 ">
        <div className="logo">
         <img src={logo} alt="" />
        </div>
        <h5 className="text-2xl my-8 font-bold text-4xl">Select Today's Food</h5>


          <div class="container">
          <div class="flex flex-wrap -mx-4">
         <div class="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-4 gap-12 pb-20">
           
     
            {
                starInfo.map(star=> <FoodCard id={star.id} star={star} handleAddToCart={handleAddToCart}></FoodCard>)
            }
          </div>


    
   
          </div>
          </div>

      
          
          </div>

          <div className="info-container bg-white sticky">
            <RightProfile cart={cart}></RightProfile>
          </div>
          </div>
          <div>
             <Blog></Blog>
          </div>
      
          </div>
  );
};

export default Fullcontent;