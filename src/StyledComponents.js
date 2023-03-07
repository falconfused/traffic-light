import styled from "styled-components";

// export const TrafficLightBulb = styled.div`
// width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   margin: 0 auto;
//   margin-top: 50px;
//   border: 5px solid #fff;

// `



export const TrafficLightdiv = styled.div`
display:flex;
border-radius: 12px;
border: 5px solid white;
flex-direction:column;
justify-content:space-around;
width: 300px;
  height: 600px;
  margin: 0 auto;
  background-color: #000;`

export const Bulb = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    // margin-top: 50px;
    border: 5px solid #fff;
    background-color: ${props => props.isActive ? props.color : 'black'}; `