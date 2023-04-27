import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Main from './Main';

export default function Navbar(){
    return(
      <div>
        <nav>
          <img alt='img' src='./logo192.png' className='nav--icon' />
          <h3 className='nav--logo_text' >ReactFacts</h3>
          <h4 className='nav--title' >React Course -  Project 1</h4>
        </nav>
        <Main />
      </div>
    )
}

ReactDOM.render(<Navbar />, document.getElementById('root'))