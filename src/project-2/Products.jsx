import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './products.module.css'

import { TbShoppingCartPlus } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Products = () => {

  let [items, setItems] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let items = axios.get('https://fakestoreapi.com/products');
    items.then((response) => {
      setItems(response.data)
      // console.log(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  

  return (
    <div id={styles.mainContainer}>
      {
        items.map((item)=>{
          return(
            <div key={item.id} className={styles.container}>
                <img src={item.image} alt='Item Not Loaded' className={styles.image} />
                <p>{item.title}</p>
                <p>{item.category}</p>
                <h1>&#8377; {item.price}</h1>
                <button className={styles.cartButton} onClick={()=>navigate('/cart',{state:item.id})}>Add <TbShoppingCartPlus/></button>
                <p className={styles.rating}>rating : {item.rating.rate}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products