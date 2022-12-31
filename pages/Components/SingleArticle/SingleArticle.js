import React from 'react'

const SingleArticle = ({title, byLine, image}) => {
  return (
    <div className='single-article'>
       <img src={image}/>
       <p>{title}</p>
       <p>byLine</p>    
    </div>
  )
}

export default SingleArticle