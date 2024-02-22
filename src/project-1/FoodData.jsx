
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './foodData.module.css'

const FoodData = () => {

  let [fData, setFoodData] = useState([]);

  let [barCode, setCode] = useState(0);
  let [item, setItemData] = useState([]);




  useEffect(() => {
    // checks the bar code is not-empty
    if (barCode) {
      let APIData = axios.get(`https://world.openfoodfacts.org/api/v2/product/${barCode}.json`);
      APIData.then((res) => {
        if (res.data && res.data.product) {
          // console.log(res.data.product);
          // don't forgot the []
          setFoodData([res.data.product]);
        }
        else {
          setFoodData(null);
        }
      }).catch((err) => {
        console.log(err);
      })
    }

  }, [barCode])

  let getCode = (eve) => {
    setCode(eve.target.value);
  }


  let getItemData = () => {

    setItemData(fData);
    // console.log(fData);
  }

  return (
    <div className={styles.container}>

      <div className={styles.subContainer}>
        <h1 className={styles.heading}>Enter Bar Code </h1>
        <input className={styles.barCode} type="text" name='code' placeholder='Enter bar-Code' onChange={getCode} />
        <button className={styles.findButton} onClick={getItemData}>Find </button>
      </div>
      <div className={styles.itemContainer}>

        {
          item != null ? item.map((ele, index) => {
            return (
              <div key={index} className={styles.itemSubContainer}>
                <img className={styles.itemImage} src={ele.image_url} alt='No Image Available' />
                <div className={styles.dataContainer}>
                  <h1><span className={styles.subHeadings}>Name      </span>  :  {ele.product_name ? ele.product_name : "NU"}</h1>
                  <h1><span className={styles.subHeadings}>Categories</span> :  {ele.categories ? ele.categories : "NU"}</h1>
                  <h1><span className={styles.subHeadings}>Country   </span>  :   {ele.countries_tags!=""  ? ele.countries_tags : "NU"}</h1>
                </div>
              </div>
            )

          }) : <h1 style={{ color: "red", fontSize: "50px", textShadow: '2px 2px 2px black' }}>No Data Found ? </h1>
        }

      </div>

    </div>
  )
}

export default FoodData