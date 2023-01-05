import React from 'react'
import styles from '../../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homeGreeting}>
      <img className={styles.skyline}src="https://cdn.traveltripper.io/site-assets/192_680_8843/media/2017-10-27-161641/mts-best-views-new-york-skyline.jpg"/>
      <h1 className={styles.h1}>Welcome to Daily News from the New York Times!</h1>
      <h2 className={styles.h2}>Below are a small sample from today's top stories. Click one or search from the topics above.</h2>
    </div>
  )
}

export default HomePage