import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './cart.module.css'

const Cart = () => {
  let loc = useLocation();
  let navigate = useNavigate();
  let [cartItem, setCartItem] = useState({
    category: "",
    description: "",
    id: 0,
    image: '',
    price: '',
    rating: {
      count: 0,
      rate: 0
    },
    title: ''
  });
  let [count, setCount] = useState(1)

  useEffect(() => {
    let product = axios.get('https://fakestoreapi.com/products/' + loc.state);
    product.then((res) => {
      setCartItem(res.data)
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (

    <>

      { cartItem ? <div className={styles.container} key={cartItem.id}>
        <div className={styles.imageContainer}>
          <img className={styles.itemImage} src={cartItem.image} alt="No data Found" />
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={() => count > 1 ? setCount(count - 1) : count}>- </button>
            <h1 className={styles.counterText}>{count}</h1>
            <button className={styles.buttons} onClick={() => setCount(count + 1)}>+</button>

          </div>
        </div>
        <div className={styles.subContainer}>
          <h3>{cartItem.title}</h3>
          <p>{cartItem.category}</p>
          <h1>price - &#8377; {cartItem.price * count}</h1>
          <h3>rating - {cartItem.rating.rate}</h3>
          <button className={styles.buyButton} onClick={()=>navigate('/order',{state:cartItem.price*count})}>Buy Now</button>
        </div>
      </div> : <h1 style={{color : 'red',textAlign: 'center'}}>add Items to cart </h1>}

    </>


  )
}

export default Cart