import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './create.module.css'

const Create = () => {

  let navigate = useNavigate();

  let [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })

  let { name, email, phone, password } = state;
  let handleChange = (eve) => {
    // eve.target returns an object with name and value as keys wo we have to do object destructuring
    let { name, value } = eve.target;
    setState({ ...state, [name]: value });
    // console.log(state);
  }
  let handleSubmit = (eve) => {
    eve.preventDefault();
    if (name && email && phone && password) {
      let userData = axios.post('http://localhost:3000/user', state);
      userData.then((resp) => {

        // giving the path (that you specified in the RoutingCrud) to move
        navigate('/data');
        console.log(resp);
      }).catch((err) => {
        console.log(err);
      })
    }

  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input className={styles.inputBoxes} type="text" placeholder='Enter your Name' value={name} name='name' onChange={handleChange} /> <br /><br />
        <input className={styles.inputBoxes} type="text" placeholder='Enter your  Email' value={email} name='email' onChange={handleChange} /> <br /><br />
        <input className={styles.inputBoxes} type="text" placeholder='Enter your Phone NO' value={phone} name='phone' onChange={handleChange} /> <br /><br />
        <input className={styles.inputBoxes} type="text" placeholder='Enter your Password' value={password} name='password' onChange={handleChange} /> <br /><br />
        <button className={styles.submitButton}>Submit</button>
      </div>
    </form>
  )
}

export default Create