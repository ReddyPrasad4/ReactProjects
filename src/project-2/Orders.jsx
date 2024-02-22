import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './orders.module.css'

const Orders = () => {
  let price = useLocation()
  let navigate = useNavigate();

  let handleSubmit =(e)=>{
    e.preventDefault()
    alert('Ordered sucessfully')
    navigate('/')

  }
  return (
    <form action="" className={styles.mainContainer} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input type="text" className={styles.inputBoxes}  required placeholder='Enter Your Full Name'/>
        <input type="text" className={styles.inputBoxes}  required placeholder='Enter your Mobile Number'/>
        <input type="text" className={styles.inputBoxes}  required placeholder='Enter alternate mobile number'/>
        <input type="text" className={styles.inputBoxes}  required placeholder='Enter your address'/>
        <input type="text" className={styles.inputBoxes}  required placeholder='Enter Alternate Address'/>
        <input type="text" className={styles.inputBoxes}  required placeholder='Enter Your Pin Code'/>
        <input type="text" className={styles.inputBoxes}  required placeholder='Enter Your Email'/>
        <button className={styles.submitButton}>Place Order &#8377; {price.state}</button>
      </div>

    </form>
  )
}

export default Orders