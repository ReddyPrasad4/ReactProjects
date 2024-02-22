import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './create.module.css'

const Update = () => {

  let [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  let { id } = useParams();
  let navigate = useNavigate()
  let { name, email, phone, password } = user;
  useEffect(() => {
    axios.get('http://localhost:3000/user/' + id).
      then((res) => {
        setUser(res.data)
        // console.log(res.data);

      }).catch((err) => {
        console.log(err);
      })
  }, [id])

  let handleChange = (eve) => {
    let { name, value } = eve.target;
    setUser({ ...user, [name]: value })
  }
  console.log(name, id);
  let handleSubmit = (eve) => {
    // Updating the Data We are
    eve.preventDefault();
    axios.put('http://localhost:3000/user/' + id, user).then((res) => {

      navigate('/view', { state: id })
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      {
        id ? <form action="" onSubmit={handleSubmit}>
          <div className={styles.container}>
            <input className={styles.inputBoxes} type="text" value={name} name='name' onChange={handleChange} /> <br /><br />
            <input className={styles.inputBoxes} type="text" value={email} name='email' onChange={handleChange} /> <br /><br />
            <input className={styles.inputBoxes} type="text" value={phone} name='phone' onChange={handleChange} /> <br /><br />
            <input className={styles.inputBoxes} type="text" value={password} name='password' onChange={handleChange} /> <br /><br />
            <button className={styles.submitButton} >Submit</button>
          </div>
        </form> : "NO update Data Found"
      }
    </>
  )
}

export default Update