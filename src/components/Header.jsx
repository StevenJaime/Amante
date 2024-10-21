import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header >
        <nav style={{display: 'flex'}}>
            <div style={{width:'50%'}}>
                <h1 style={{margin:'20px 0'}}>LOGO</h1>
            </div>
            <div style={{width:'50%', display:'flex', justifyContent:'end'}}>
                <ul style={{ margin:'20px 0', display: 'flex', justifyContent: 'space-evenly', width:'50%'}}>
                    <li>X</li>
                    <li>X</li>
                    <li>X</li>
                    <li>X</li>
                    <li>X</li>
                </ul>
            </div>
        </nav>

        <nav style={{display: 'flex', justifyContent:'center'}}>
            <div style={{width:'50%', display:'flex'}}>
                <ul style={{ margin:'20px 0', display: 'flex', justifyContent: 'space-evenly', width:'100%'}}>
                    <li>WOMEN</li>
                    <li>
                       <Link to="/MenNewArrivals" >MEN</Link> 
                    </li>
                    <li>KIDS</li>
                    <li>HOME</li>
                    <li>BEAUTY</li>
                </ul>
            </div>

        </nav>
    </header>
  )
}

export default Header