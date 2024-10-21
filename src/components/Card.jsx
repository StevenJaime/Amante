import React from 'react';
import {Link} from 'react-router-dom';

const Card = ( { name, img, price, color, code}) => {
    

    const colorNum = color.rgbColors.length;
    
    return (
        <div className="container">
            <Link to={`/Product/${code}`}><img src={img} alt={name} style={{width:'100%'}}/></Link>
            <div className="item-details">
                <h2>{name}</h2>
                <span>{price}</span>
                <div className="item-colors" style={{display:'flex'}}>
                    <ul style={{display:'flex'}}>
                        {color.rgbColors.slice(0,3).map(col=> (
                            
                            color.articleColorNames.map((a, index) => (
                                <a href="" key={index} title={a}><li style={{width:'10px', height:'10px', backgroundColor:`${col}`}} /></a>
                            ))
                        
                        ))}
                    </ul>
                    <span>
                        { colorNum <=3 ? "" : `+ ${colorNum - 3}`}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;
