import React from 'react'
import styles from '../../styles/SingleArticle.module.css'

const SingleArticle = ({title, byline, image, url}) => {

  return (
    <div className={styles.singleArticle}>
        <div className={styles.infoBox}>
            <a href={url} className={styles.title} target="_blank" rel="noreferrer">{title}</a>
            <p className={styles.byline}>{byline}</p>    
        </div>
        <img className={styles.articleImage}src={image}/>
    </div>
  )
}

export default SingleArticle