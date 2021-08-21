import React from 'react';
import './style.scss';

const Sidebar = ({ list }) => {
  return (
    <div className='sidebar'>
      {list?.map((item, index) => {
        return (
          <div key={index} className='sidebar-item'>
            <img src={item?.icon} alt='' className='img' />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
