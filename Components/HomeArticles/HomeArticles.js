import React from 'react'
import SingleArticle from '../SingleArticle/SingleArticle'
import styles from '../../styles/HomeArticles.module.css'

const HomeArticles = ({articles}) => {
    let count = 0
    let mappedArticles = articles.filter(article => article.multimedia && article.title).slice(0, 3).map(article => {
        count++
        const {title, byline, multimedia, url} = article
        return (
            <SingleArticle
                key={count}
                title={title}
                byline={byline}
                image={multimedia[0].url}
                url={url}
            />
        )
    })

  return (
    <div className={styles.bigBox}>
        <div className={styles.first}>{mappedArticles[0]}</div>
        <div className={styles.second}>{mappedArticles[1]}</div>
        <div className={styles.third}>{mappedArticles[2]}</div>        
    </div>
  )
}

export default HomeArticles