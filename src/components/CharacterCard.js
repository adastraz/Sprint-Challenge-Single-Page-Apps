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
`
const CharacterCard = (props) => {
  console.log(props)
  return (
    <SectionCSS>
      <Head>{props.people.name}</Head>
      <img src={props.people.image} />
      <h4>Status : {props.people.status}</h4>
      <h4>Species : {props.people.species}</h4>
    </SectionCSS>
  )
}

export default CharacterCard