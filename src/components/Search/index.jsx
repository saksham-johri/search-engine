import React, { useState } from 'react';
import search from '../../assets/icons/search.png';
import './style.scss';

const Search = ({ item = {} }) => {
  const { logo = null, url = '' } = item;

  const [searchText, setSearchText] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    if (!searchText || !url) return;

    window.location.href = `${url}${searchText}`;
  };

  return (
    <div className='search'>
      <div className='logo'>
        <img src={logo} alt='' className='img' />
      </div>

      <form className='search-box-wrapper'>
        <div className='search-box'>
          <label htmlFor='input' className='search-icon'>
            <img src={search} alt='' className='img' />
          </label>

          <input
            id='input'
            name='search-bar'
            value={searchText}
            onChange={({ target: { value } }) => {
              setSearchText(value);
            }}
          />
        </div>

        <button type='submit' className='btn' onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
