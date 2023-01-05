import React from 'react'
import SingleArticle from '../../Components/SingleArticle/SingleArticle'
import Layout from '../../Components/Layout/Layout'
import styles from '../../styles/HomeArticles.module.css'

const ChosenTopicList = ({articles}) => {
    let count = 0
    const mappedArticles = articles.filter(article => article.multimedia && article.title).slice(0, 5).map(article => {
        count++
        const {title, byline, multimedia, url} = article
        return (
            <SingleArticle
                key={count}
                title={title}
                byline={byline}
                image={multimedia[0].url}
                url={url}/>
         )
    })

  return (
    <div>
      <Layout>
        <div className={styles.bigBox}>
          <div className={styles.first}>{mappedArticles[0]}</div>
          <div className={styles.second}>{mappedArticles[1]}</div>
          <div className={styles.third}>{mappedArticles[2]}</div>
          <div className={styles.fourth}>{mappedArticles[3]}</div>           
        </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps(context) {
    const topic = context.params.topic
    const resData = await fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=YMwGtcuTdYGINAxVqRw5puQauT6dAhD3`)
    const data = await resData.json();

    return {
      props: {
        articles: data.results
      }
    }
}

export default ChosenTopicList