import {React, useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';



const Product = () => {

    const { code } = useParams();
    const [ details, setDetails ] = useState();
    const [ itemDetails, setItemDetails ] = useState();
    const [ images, setImages ] = useState();
    
   
    useEffect(() => {
        fetchFromApi(`/products/detail?lang=en&country=us&productcode=${code}`)
        .then((data) => setDetails(data.product))  
    },[])

    useEffect(() => {
        details ? setItemDetails(details.articlesList.filter((a) => (code === a.code))) : 
        console.log('loading');
    },[details])

    useEffect(() => {
        itemDetails ? setImages(itemDetails[0].galleryDetails.map((a) => (a.baseUrl))): 
        console.log('loading img');
    },[itemDetails])


    
    if(!images) return 'loading...';
    
    console.log(images)
   
    return (

        
        <div className='container' style={{display: 'flex'}}>             
            <div className="left-box" style={{width:'50%'}}> 

                <div className="img-display" style={{objectFit:'cover'}}>
                    <img src={images[0]} style={{width:'100%'}}  />
                </div>

                <div className="img-gallery">
                    <ul>
                        {images.slice(1).map((a, idx) => (
                            <li style={{objectFit:'cover'}} key={idx}><img style={{width:'100%'}} src={a} /></li>
                        ))}
                    </ul>
                </div>
                
            </div>

            <div className="right-box" style={{width:'50%'}}>
                <div className="item-detail" style={{ display:'flex', justifyContent:'space-between'}}>
                    <div>
                        <h2 style={{ margin:'0' }}>{itemDetails[0].name}</h2>
                        <span>{itemDetails[0].whitePrice.price}</span>
                    </div>
                    <div>
                        <span>like_btn</span>
                    </div>
                </div>

                <div className="item-color" style={{margin:'10px 0'}}>
                    <span>color</span>
                    <span>img</span>
                </div>

                <div className="item-size">
                    <span>size</span>
                    <span>sizes</span>
                </div>

            </div>
        </div>
    );
}

export default Product;
