import React from "react";
import styled from 'styled-components'

const SectionCSS = styled.section`
display:flex;
justify-content: space-around;
color: aqua;
flex-wrap:wrap;
flex-direction:column;
background:lightcoral;
width: 55%;
margin: 5% 0;
padding-bottom: 5%
text-align:center;
`
const Head = styled.h1`
width:100%;
color:white;
font-weight:bold;
text-align: center;
font-size:2rem;
`
const EpisodeCard = (props) => {
  console.log(props)
  return (
    <SectionCSS>
      <Head>Episode : {props.episode.name}</Head>
      <h4>Air Date : {props.episode.air_date}</h4>
      <h4>Episode : {props.episode.episode}</h4>
    </SectionCSS>
  )
}

export default EpisodeCard