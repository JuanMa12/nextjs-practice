import Card from '../ui/Card'
import styles from './Detail.module.css'
import { useEffect, useState } from 'react'
import  Router  from 'next/router'

const Detail = ({ users }) => {

  const [data , setData] = useState([])

  useEffect(() => {
    
    (async () => {
      try {
        const data_users = users; 
  
        console.log('fecthData Detail.js', data_users)
  
        let userData = [];
        for (const [key, currentValue] of Object.entries(data_users)) {
          userData.push({
            key: key,
            first_name: currentValue.first_name,
            last_name: currentValue.last_name,
            email: currentValue.email
          })
        }
        setData(userData)
      } catch (error) {
        console.log(error)
      }
    })()

  }, []);

  let userData;
  if (data.length > 0) {
    userData = data.map((currUser, index) => {
      return (
        
        <li className={styles.listItem} key={currUser.key} 
          onClick={ e => Router.push('/user/[id]','/user/' + currUser.key)}>
          <div className={styles.description}>
          <h3>{`User: ${currUser.first_name} ${currUser.last_name}`}</h3>
          <p>{`Email: ${currUser.email}`}</p>
          </div>
        </li>
      )
    })
  }
  
  return( 
    <Card>
        <ul className={styles.main}>
          {userData}
        </ul>
    </Card>
  )
}

export default Detail
