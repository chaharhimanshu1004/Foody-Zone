import { useState } from 'react';
import '../styles/Header.css'
function Header({ onTypeChange }) {
    const handleClick = (type) => {
        onTypeChange(type);
      };
    return (
      <div className="header">
        <div className="fullHeader">
            <div className='top_header'>
                <div className="logo">
                    <img src="/images/Foody.svg" alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Food...' className='input' />
                </div>
            </div>
            <div className="types">
            <button onClick={() => handleClick(null)}>All</button>
            <button onClick={() => handleClick('breakfast')}>Breakfast</button>
            <button onClick={() => handleClick('lunch')}>Lunch</button>
            <button onClick={() => handleClick('dinner')}>Dinner</button>

            </div>
        </div>
      </div>
    );
  }
  
  export default Header;