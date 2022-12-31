import React from 'react'
import Image from '../assets/britain.jpg'
import { FaStar } from "react-icons/fa";
import './Review.css'
function Review() {
  return (
    
<div className='review'> 

<h1>Related Tours</h1>
<div className="testimonial-quote group">
    <img src={Image}></img>

    <div className="quote-container">
        <blockquote>
            <h2>China Autumn</h2>

            <p>Travel is a continuous adventure, where there is no place for worries about everyday life, anxious thoughts about the past and the future. It is an opportunity to live every moment. You can be happy regardless of age and life circumstances.”</p>
        </blockquote>  
        <div className='stars'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>


                </div>
                <hr></hr>
                
        
        
    </div>
    
</div>    
    
    </div>
    
  )
}

export default Review
