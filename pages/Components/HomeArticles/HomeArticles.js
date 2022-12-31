import React from 'react'
import SingleArticle from '../SingleArticle/SingleArticle'

const HomeArticles = ({articles}) => {
    let count = 0
    let mappedArticles = articles.filter(article => article.multimedia).slice(0, 3).map(article => {
        count++
        const {title, byLine, multimedia,} = article
        return (
            <SingleArticle
                key={count}
                title={title}
                byLine={byLine}
                image={multimedia[0].url}
            />
        )
    })

  return (
    <div className="home-articles-box">
        {mappedArticles}
    </div>
  )
}

export default HomeArticles