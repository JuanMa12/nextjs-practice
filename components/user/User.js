import React from 'react'
import styles from './User.module.css'
import Card from '../ui/Card'
import { useRouter } from 'next/router'

const User = ({user,id}) => {
  console.log(user)
  return (
      <>
        <h1>Profile</h1>
        <p>User id: {id}</p>
        <Card>
            <ul className={styles.main}>
                <li className={styles.listItem}>
                <div className={styles.description}>
                    <h3>{`User: ${user.first_name} ${user.last_name}`}</h3>
                    <p>{`Email: ${user.email}`}</p>
                </div>
                </li>
            </ul>
        </Card>
        </>
  )
}


export default User