import React from "react";
import styled from 'styled-components'

const SectionCSS = styled.section`
display:flex;
justify-content: space-around;
color: aqua;
flex-wrap:wrap;
background:lightcoral;
width: 55%;
margin: 5% 0;
padding-bottom: 5%
`
const Head = styled.h1`
width:100%;
color:white;
font-weight:bold;
text-align: center;
font-size:2rem;
`
const LocationCard = (props) => {
  console.log(props)
  return (
    <SectionCSS>
      <Head>Location : {props.place.name}</Head>
      <h4>Place : {props.place.type}</h4>
      <h4>Dimension : {props.place.dimension}</h4>
    </SectionCSS>
  )
}

export default LocationCard