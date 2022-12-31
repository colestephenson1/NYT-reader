import React from 'react'
import styles from '../../../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homeGreeting}>
        <h1 className={styles.h1}>Welcome to Daily News from the New York Times!</h1>
        <h2 className={styles.h2}>Below are a small sample from today's top stories. Above you can search for a specific topic.</h2>
    </div>
  )
}

export default HomePage