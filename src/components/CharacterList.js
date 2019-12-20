import React from "react";
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const CSS = styled.section`
display:flex;
justify-content: space-around;
color: aqua;
flex-wrap:wrap;
background:skyblue;
width: 100%;
`

const CharacterList = (props) => {
  console.log(props)
  return (
    <section className="character-list">
    
      {
        props.people.map((x,i) => {
          return(
            <CSS>
              <CharacterCard 
                people={x} 
                key={i}
              />
            </CSS>
          )

        })
      }
    </section>
  );
}

export default CharacterList