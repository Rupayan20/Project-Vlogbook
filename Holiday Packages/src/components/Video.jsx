import React from "react";
import video from "../assets/nature.mp4"
const Video = (embedId)=>{
    return (
        <div style={{height:"100vh",marginTop:"100px"}}>

          <iframe style={{height:"100vh", width:"100vw"}} src="https://www.youtube.com/embed/LBnPqztNgd0?autoplay=1&loop=1&playlist=LBnPqztNgd0&mute=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
    );
}
export default Video;
