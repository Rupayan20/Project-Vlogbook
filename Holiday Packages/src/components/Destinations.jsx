import React from 'react'
import styled from 'styled-components'
import destination1 from "../assets/tokyo.jpg";
import destination2 from "../assets/paris.jpg";
import destination3 from "../assets/london.jpg";
import destination4 from "../assets/seoul.jpg";

export default function Destinations() {
  const data = [
    {
      image: destination1,
      title:"Tokyo",
    },
    {
      image: destination2,
      title:"Paris",
    },
    {
      image: destination3,
      title:"London",
    },
    {
      image: destination4,
      title:"Seoul",
    },


  ];
  return <Section id="destinations">
    <div className="title">
        <h2>Popular Destinations</h2>
      </div>
      <div className="dest">
    {
      data.map((destination)=> {
        return(
          <div className="destination">
            <div className="image">
              <img src={destination.image} alt="" />

            </div>
            <h3>{destination.title}</h3>

          </div>
        )
      })
    }
    </div>
  </Section>
  
}

const Section = styled.section`
padding: 5rem 0;
.title {
  text-align: center;
  margin-bottom: 40px;
}
.dest{
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
}
.destination{
  display: flex;
  flex-direction:column;
  gap: 1rem;
  padding:2rem;
  backgrund-color: aliceblue;
  box-shadow: rgba(100,100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .image{
      img{
        height:400px;
        width:100%;
        
      }
    }

}
@media screen and (min-width: 280px) and (max-width: 720px) {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
@media screen and (min-width: 800px) and (max-width: 1080px) {
  grid-template-columns: repeat(2, 1fr);
}
`;
