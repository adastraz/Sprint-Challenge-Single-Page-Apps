import React from "react";

const SearchForm = (props) => {
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor='search'>
          search<br />
        </label>
        <input
          name='search'
          type='text'
          id='search'
          placeholder='enter name here'
          value={props.search}
          onChange={(e) => {
            props.handleChanges(e)
          }}
          />
          <button type='submit'>Enter</button>
      </form>    </section>
  );
}
export default SearchForm