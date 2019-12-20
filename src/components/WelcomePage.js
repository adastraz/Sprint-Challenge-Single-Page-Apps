import React from "react";
import styled from 'styled-components'

const LookNice = styled.div`
display:flex;
justify-content:space-around;
margin:3% 0;
flex-direction:column;
width:50%;
margin: 0 0 0 25%;
text-align:center;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <LookNice>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </LookNice>
    </section>
  );
}
