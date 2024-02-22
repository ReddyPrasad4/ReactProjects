import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './data.module.css'

const Data = () => {
  let [list, setlist] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let usersData = axios.get('http://localhost:3000/user');
    usersData.then((res) => {
      setlist(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  let deleteUser = (id) => {
    axios.delete('http://localhost:3000/user/' + id);
    let afterDeleting = list.filter((usr) => {
      return usr.id != id
    }) 
    setlist(afterDeleting);
  }
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead >
          <tr className={styles.row}>
            <th className={styles.tHead}>Name</th>
            <th className={styles.tHead}>Email</th>
            <th className={styles.tHead}>Phn No</th>
            <th className={styles.tHead}>Password</th>
            <th className={styles.tHead}>Delete/View</th>
          </tr>
        </thead >
        {
          list.map((data) => {
            return (
              <tbody key={data.id}  className={styles.tBody}>
                <tr className={styles.row}>
                  <td className={styles.tData}>{data.name}</td>
                  <td className={styles.tData}>{data.email}</td>
                  <td className={styles.tData}>{data.phone}</td>
                  <td className={styles.tData}>{data.password}</td>
                  <td className={styles.tData} id={styles.buttonsContainer}>
                    <button className={styles.buttons} onClick={() => deleteUser(data.id)}>Delete</button>
                    <button className={styles.buttons} onClick={()=> navigate('/view',{state:data.id})}>View</button>

                    {/* sending data as well as navigating using <Link> tag */}
                    {/* <Link to={`/view/${data.id}`}>View</Link> */}
                  </td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
      <button className={styles.buttons} id={styles.addButton} onClick={()=> navigate('/add')}>Add</button>
      {/* <Link className={styles.links} to='/'>Add</Link> */}
    </div>
  )
}

export default Data