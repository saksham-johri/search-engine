import React from 'react';
import Sidebar from '../../components/SIdeBar';
import { engineList } from './_base';
import './style.scss';

const Landing = () => {
  return (
    <div className='landing'>
      <Sidebar list={engineList} />

      <div className='search-container'>serch</div>
    </div>
  );
};

export default Landing;
