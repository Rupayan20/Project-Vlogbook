import React from "react";
import AnimatedNumber from "animated-number-react";
const styles = {
    fontFamily: 'Ubuntu',

  
  fontSize:"50px",
  backgroundColor:"black",
  color:"white",
  height:"60vh",

  display: "table-cell",
  verticalAlign: "middle",
  textAlign: "center"

  
};

const initialValue = 0;
const currentValue = 112090;

const Counter = () => (
  <div style={styles}>

    <h4>This trip will be the best</h4>
<center><p style={{fontSize:"18px", width:"50%",marginTop:"30px",marginBottom:"30px"}}>Travel should be an integral part of every person's life. In each trip, you can make new acquaintances, new friends, business partners. Thanks to travel, you grow up, go to a new level of your personal development.</p></center>

    <AnimatedNumber
    style={{marginTop:"20px"}}
      component="text"
      initialValue={initialValue}
      value={currentValue}
      stepPrecision={0}
      duration={1200}
      formatValue={n => Intl.NumberFormat("en-US").format(n)}
    />
    <p style={{fontSize:"17px",marginTop:"10px",color:"#E1D9D1"}}>Happy Customers</p>
  </div>
);

export default Counter;
