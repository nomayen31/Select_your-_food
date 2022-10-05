import React from "react";

const FoodCard = (props) => {

    const {name, img , age , time,} = props.star;
    const {handleAddToCart} = props;
  return (

    <div class="bg-white rounded-2xl overflow-hidden mb-10 pb-10 shadow-lg">
    <div className="card-img">
    <img className="cart-image" src={img} alt="" />
    </div>
    <div className="p-8 sm:p-9 md:p-7 xl:p-9">
      <h3 className="text-2xl font-bold">Foods Name: {name}</h3>
       
      <h5 className="text-lg">For Age: <b>{age}</b></h5>
      <h5 className="text-md mt-2">
       Challange Time: <span><b>{time}s</b></span>
      </h5>

 
        <button onClick={()=>handleAddToCart(props.star)} className="bg-red-600 text-white px-16 mt-8  py-3">
          <p>Add to Challange list</p>
        </button>
    </div>
    </div>
  
 
    
   
   
  );
};

export default FoodCard;