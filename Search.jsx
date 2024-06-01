import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./sprt.css"
import locicon from '../assets/locicon.png'
import imagenotfound from '../assets/imagenotfound.png'
import loading from '../assets/loading.gif'
import { countries } from '../App'

const API_KEY = 'db0fdf442cb6417fb7b61b83a2293af9'

const Search = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { selectedCountry } = useContext(countries)
  const location = useLocation()  
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('query') || 'general'  // Use 'general' if no query is provided

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry.slice(0, 2)}&category=${query}&apiKey=${API_KEY}`
      console.log("Fetching URL:", url) 
      try {
        let res = await fetch(url)
        let data = await res.json()
        console.log("API Response:", data) 
        setNews(data.articles)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching news:", error) 
        setError(error.message)
        setLoading(false)
      }
    }

    fetchNews()
  }, [query, selectedCountry])  

  

  



  if (loading) {
    return <p id="loading" className='error'>Loading... please wait....</p>
  }

  if (error) {
    return <p className='error'>Check your internet connection and try again <br />Error: {error}</p>
  }

  return <Sprt data={news} country={selectedCountry} />
}


const truncatetext = (text) => {
  if (!text) {
    return ''
  }
  if (text.length > 100) {
    return text.slice(0, 200) + "..."
  }
  return text + ".."
}

const Website = (loc) => {
  window.open(loc, '_blank')
}

const handleError = (e) => {
  e.target.src = loading
}

const time = (time) => {
  const newdate = new Date(time)
  if (newdate.getHours !== 0) {
    return newdate.getHours() + " hours ago"
  }
  return newdate.getMinutes() + " mins ago"
}

export const Sprt = ({ data, country }) => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('query') || 'general'
  return (
    <div>
      <h1>{query} News<span ><img className='locimg' src={locicon} alt="Location Icon" /><span className='locname'>{country}</span></span></h1>
      <div className='whole'>{data.length === 0 ? (
        <p style={{ color: 'black', fontSize: '50px' }}>No news available</p>
      ) : (
        data.map((article, index) => (
          <div className='single' key={index}>
            <div className='left'>
              <img className="newsimg" width="230px" height="230px" onError={handleError} src={article.urlToImage ? article.urlToImage : imagenotfound} alt="News" />
            </div>
            <div className='right'>
              <div className='c'>
                <p className='channel'>{article.source.name}</p>
              </div>
              <h2 className='title'>{article.title}</h2>
              <p className='des'>{article.description == null ? "Visit site for more detail." : article.description}<span>{truncatetext(article.content)}</span></p>
              <div className='rm'>
                <button className='readmore' onClick={() => Website(article.url)} >Read more</button>
                <p className='time'>{time(article.publishedAt)}</p>
              </div>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
  )
}

export default Search
