import React from "react";
import EpisodeCard from './EpisodeCard'
import styled from 'styled-components'

const CSS = styled.section`
display:flex;
justify-content: space-around;
color: aqua;
flex-wrap:wrap;
background:skyblue;
width: 100%;
`

const EpisodeList = (props) => {
  console.log(props)
  return (
    <section className="character-list">
    
      {
        props.episode.map((x,i) => {
          return(
            <CSS>
              <EpisodeCard 
                episode={x} 
                key={i}
              />
            </CSS>
          )

        })
      }
    </section>
  );
}

export default EpisodeList