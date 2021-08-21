import React, { useState } from 'react';
import Sidebar from '../../components/SIdeBar';
import Search from '../../components/Search';
import { engineList } from './_base';
import './style.scss';

const Landing = () => {
  const [selectedEngine, setSelectedEngine] = useState(engineList?.[0]);

  return (
    <div className='landing'>
      <Sidebar
        list={engineList}
        selected={selectedEngine}
        setSelected={setSelectedEngine}
      />

      <Search item={selectedEngine} />
    </div>
  );
};

export default Landing;
