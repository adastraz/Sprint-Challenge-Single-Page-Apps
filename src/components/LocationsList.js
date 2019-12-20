import React from "react";
import LocationCard from './LocationCard'
import styled from 'styled-components'

const CSS = styled.section`
display:flex;
justify-content: space-around;
color: aqua;
flex-wrap:wrap;
background:skyblue;
width: 100%;
`

const LocationList = (props) => {
  console.log(props)
  return (
    <section className="character-list">
    
      {
        props.place.map((x,i) => {
          return(
            <CSS>
              <LocationCard 
                place={x} 
                key={i}
              />
            </CSS>
          )

        })
      }
    </section>
  );
}

export default LocationList