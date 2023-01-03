import React from 'react'
import SingleArticle from '../SingleArticle/SingleArticle'
import styles from '../../../styles/HomeArticles.module.css'

const HomeArticles = ({articles}) => {
    console.log(articles)
    let count = 0
    let mappedArticles = articles.filter(article => article.multimedia).slice(0, 3).map(article => {
        count++
        const {title, byline, multimedia} = article
        return (
            <SingleArticle
                key={count}
                title={title}
                byline={byline}
                image={multimedia[0].url}
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