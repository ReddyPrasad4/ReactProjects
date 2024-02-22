import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './view.module.css'

const View = (props) => {

  let [user, setUser] = useState(null);
  // accessing the data from the data page which is sent by using <Link  to=''/>
  let { id } = useParams();

  // accessing the data from the update page which is sent by useNavigate() hook
  let location = useLocation();
  
  // assigning the value to id which is not empty
  id = (id==null) ? location.state : id;

  // console.log(typeof id);
  // console.log(id);
  useEffect(() => {

    let data = axios.get('http://localhost:3000/user/' + id);
    data.then((res) => {
      setUser(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [id])
  return (
    <>
      {
        user ? <div className={styles.container}>
          <h1>Name - {user.name}</h1>
          <h1>Email - {user.email}</h1>
          <h1>Phone No - {user.phone}</h1>
          <h1>Password - {user.password}</h1>
          <Link className={styles.links} id={styles.l1} to='/data'>Back</Link>
          <Link className={styles.links} id={styles.l2} to={`/update/${id}`}>UpDate</Link>
        </div> : "No View Data Found "
      }
    </>
  )
}

export default View