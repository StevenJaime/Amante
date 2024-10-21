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

        
        <div style={{display: 'flex'}}>
             
            <div className="left-box" style={{display:'flex'}}>

                <div className="img-display">
                    <img src={images[0]} style={{width:'500px', height:'500px'}}  />
                </div>

                <div className="img-gallery">
                    <ul>
                        {images.slice(1).map((a, idx) => (
                            <li style={{ width: '40px', height: '40px'}} key={idx}><img style={{width:'100%'}} src={a} /></li>
                        ))}
                    </ul>
                </div>
                
            </div>
            <div className="right-box">
                <div className="item-detail">
                    <div>
                        <h2>{itemDetails[0].name}</h2>
                        <span>{itemDetails[0].whitePrice.price}</span>
                    </div>
                    <div>
                        <span>like_btn</span>
                    </div>
                </div>

                <div className="item-color">
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
