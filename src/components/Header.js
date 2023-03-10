import React from 'react';
//import
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt=''></img>
          </a>
          {/* button */}
          <a href="#contact"><button className='btn btn-sm'>Work with me</button></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
