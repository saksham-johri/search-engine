import React from 'react';
import './style.scss';

const Sidebar = ({ list = [], selected = {}, setSelected = () => {} }) => {
  return (
    <div className='sidebar'>
      {list?.map((item, index) => {
        const { name = '', icon = null } = item || {};

        return (
          <div
            key={index}
            className={`sidebar-item ${item === selected ? 'selected' : ''}`}
            onClick={() => setSelected(item)}
            title={name}
          >
            <img src={icon} alt='' className='img' />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
