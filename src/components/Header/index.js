import React from 'react';
import coverImage from '../../assets/bg-pp/header.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Oscar Flores</h1>
      <img src={coverImage} alt="red galaxy background"></img>
      {props.children}
    </header>
  );
}

export default Header;
