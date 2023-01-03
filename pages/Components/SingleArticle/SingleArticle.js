import React from 'react'
import styles from '../../../styles/SingleArticle.module.css'

const SingleArticle = ({title, byline, image}) => {

  return (
    <div className={styles.singleArticle}>
        <div className={styles.infoBox}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.byline}>{byline}</p>    
        </div>
        <img className={styles.articleImage}src={image}/>
    </div>
  )
}

export default SingleArticle