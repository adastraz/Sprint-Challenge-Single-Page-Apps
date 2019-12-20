import React,{useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from 'axios'
import CharacterList from './components/CharacterList'
import {Link, Route, Switch} from 'react-router-dom'
import SearchForm from './components/SearchForm'
import styled from 'styled-components'
import WelcomePage from './components/WelcomePage'

const LookNice = styled.div`
display:flex;
justify-content:space-around;
margin:3% 0;

`
const App = () => {
  const [search, setSearch] = useState('')
  const [people, setNames] = useState([])

  function handleChanges(e) {
    e.preventDefault()
    setSearch(e.target.value)
  }
  useEffect (() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res)
        let characters = res.data.results.filter(char => 
          char.name.toLowerCase().includes(search.toLowerCase())
        )
        setNames(characters)
    })
},[search])

  return (
    <main>
      <nav>
        <LookNice>
          <h1>Rick And Morty Api</h1>
        </LookNice>
        <div className='links'>
          <LookNice>
            <Link to='/'>Home</Link>
            <Link to='/search-component'>Search</Link>
          </LookNice>
        </div>
      </nav>
      <Switch>
        <Route path='/search-component'>
          <LookNice>
            <SearchForm 
            search={search} 
            handleChanges={handleChanges}
            />
          </LookNice>
          <CharacterList people={people}/>
        </Route>
        <Route path='/'>
          <Header />
          <WelcomePage />
        </Route>
      </Switch>


      {/* <form>
        <label htmlFor='search'>
          search<br />
        </label>
        <input
          name='search'
          type='text'
          id='search'
          placeholder='enter name here'
          value={search}
          onChange={handleChanges}
          />
          <button type='submit'>Enter</button>
      </form>
      <div>
        <Header />
        <CharacterList people={people} />
      </div> */}
    </main>
  );
}
export default App