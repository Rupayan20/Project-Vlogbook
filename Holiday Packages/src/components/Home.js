import React from 'react'
import '../App.css'
import HomeImage from '../assets/home.jpg'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
        <img src={HomeImage} alt="" className='home-image'></img>
        <div className='home-content'>
          <div className='home-title'>
        <h1>Where do you want to go?</h1>
        <p>Fill this form and our manager will contact you</p>
        </div>
        <div className="search">
        <div className="h-container">
          <label htmlFor=''>Destination</label>
          <input type="text" placeholder='Search your location' />
        </div>
        <div className="h-container">
          <label htmlFor=''>Departure</label>
          <input type="date"/>
        </div>
        <div className="h-container">
          <label htmlFor=''>Return</label>
          <input type="date" />
        </div>
        <button>
          Search
        </button>
      </div>
        </div>
    </div>
  )
}

export default Home
