import React from 'react'

const Newsarticle = ({data}) => {

  return (
    <div>
      {data.articles.map((article,index)=>(<div key={index}><h2>{article.title}</h2></div>))}
    </div>
  )
}

export default Newsarticle
