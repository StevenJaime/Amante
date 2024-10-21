import {React, useEffect, useState} from 'react';
import { fetchFromApi } from '../../utils/fetchFromApi';
import { Card } from '../../components/comp_index';


const MenNewArrivals = ({id, setId}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchFromApi
        ('/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_newarrivals_all')
        .then((data) => setItems(data.results))
    },[])
    
    console.log(items)

    return (
        <div style={{display:'grid', gridTemplateColumns:'repeat( 3, minmax(0,1fr))', gridGap:'20px'}}>
           {items.map(item => 
             
            <Card id={id} setId={setId} key={item.code} name={item.name} img={item.images[0].url} price={item.price.formattedValue} color={item} code={item.defaultArticle.code} ></Card>
           )}
        </div>
    );
}

export default MenNewArrivals;
