import React, { useState, useEffect } from 'react';
import { fetchFromApi } from '../utils/fetchFromApi';

const Hero = () => {

  const[ catData, setCatData ] = useState([]);

  useEffect(() => {
    fetchFromApi('/categories/list?lang=en&country=us')
    .then((data) => setCatData(data))
    
  },[])
  console.log(catData)

  return (
    <main>
      <div className='one' style={{ display:'flex', width: '100%', height:'80vh', backgroundColor:'grey' }}>
        <div style={{width:'50%'}}></div>
        <div style={{width:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className="container" style={{display:'flex' , height:'20vh', width:'80%' ,flexDirection:'column', justifyContent:'space-evenly'}}>
            <div className='txt-box'>
              <h1 style={{textAlign:'center'}}>NEW ARRIVALS</h1>
            </div>
            <div className='btn-box' style={{ display:'flex', justifyContent:'space-between'}}>
              <button style={{width:'45%', height:'50px'}}>SHOP WOMEN</button>
              <button style={{width:'45%', height:'50px'}}>SHOP MEN</button>
            </div>
          </div>
        </div>
      </div>

      <div className='two' style={{ display:'flex', margin:'50px 0', width: '100%', height:'40vh' }}>
        <div style={{width:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className="container" style={{display:'flex' , height:'20vh', width:'80%' ,flexDirection:'column', justifyContent:'space-evenly'}}>
            <div className='txt-box'>
              <h1 style={{textAlign:'center'}}>NEW ARRIVALS</h1>
            </div>
            <div className='btn-box' style={{ display:'flex', justifyContent:'space-between'}}>
              <button style={{width:'45%', height:'50px'}}>SHOP WOMEN</button>
              <button style={{width:'45%', height:'50px'}}>SHOP MEN</button>
            </div>
          </div>
        </div>
        <div style={{width:'50%'}}></div>
      </div>

      <div className='three' style={{ display:'flex', margin:'50px 0', width: '100%', height:'40vh' }}>
        <div style={{width:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className="container" style={{display:'flex' , height:'20vh', width:'80%' ,flexDirection:'column', justifyContent:'space-evenly'}}>
            <div className='txt-box'>
              <h1 style={{textAlign:'center'}}>NEW ARRIVALS</h1>
            </div>
            <div className='btn-box' style={{ display:'flex', justifyContent:'space-between'}}>
              <button style={{width:'45%', height:'50px'}}>SHOP WOMEN</button>
              <button style={{width:'45%', height:'50px'}}>SHOP MEN</button>
            </div>
          </div>
        </div>
        <div style={{width:'50%'}}></div>
      </div>

    </main>
  )
}

export default Hero