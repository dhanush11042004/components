import React, { useEffect, useState ,useContext} from 'react';
import "./sprt.css"
import locicon from '../assets/locicon.png'
import imagenotfound from '../assets/imagenotfound.png'
import loading from '../assets/loading.gif'
import load from '../assets/load.png'
import { countries } from '../App';

const API_KEY = 'db0fdf442cb6417fb7b61b83a2293af9';

const Generalnews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {selectedCountry,setselectedCountry}=useContext(countries)
  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry.slice(0,2)}&category=general&apiKey=${API_KEY}`;
      try {
        let res = await fetch(url);
        let data = await res.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCountry]);

  if (loading) {
    return <p id="loading" className='error'>Loading... please wait....</p>;
  }

  if (error) {
    return <p className='error'>check your internet connection and try again <br/>Error: {error}</p>;
  }

  return <General data={news} />;
};
const truncatetext=(text)=>{
  
  if(!text){
    return '';
  }
  if(text.length>100){
   return text.slice(0,200)+"...";
  }
  return text+"..";

}
const Website=(loc)=>{
  window.open(loc,'_blank');

}

  const check=(s)=>{
   
    if(s=="[Removed]"){
      return true;
    }
    return false;
  
  }
  const handleError=(e)=>{
    e.target.src=loading;


  }
  const time=(time)=>{
  
    const newdate = new Date(time)
   if(newdate.getHours!=0){
    
    return newdate.getHours() +" hours ago"
   }
   return newdate.getMinutes() +" mins ago"
    
    
   
   
  }
 
export const General=({ data })=> {
  const {selectedCountry,setselectedCountry}=useContext(countries)
  
  return (
    <div>
      <h1>General News<span ><img className='locimg'src={locicon}/><span className='locname'>{selectedCountry}</span></span></h1>
     <div className='whole'>{data.length === 0 ? (
        <p style={{color:'black', fontSize:'50px'}}>No news available</p>
      ) : (
        data.map((article, index) => (
      
          
         <div className='single'  key={index}>
            
       { !check(article.source.name) &&  <div className='left'>
            <img className="newsimg" width="230px" height="230px" onError={handleError} src={article.urlToImage?article.urlToImage:imagenotfound}/>
           </div> }
           { !check(article.source.name) &&  <div className='right'>
            <div className='c'>

           <p className='channel'>{article.source.name=="[Removed]"?false:article.source.name}</p>
         </div>
        
          <h2 className='title'>{article.title}</h2>
         
           
            <p className='des'>{article.description==null?"visit site for more detail.":article.description}<span>{truncatetext(article.content)}</span></p>
            
            <div className='rm'>
              
            <button className='readmore' onClick={()=>Website(article.url)} >Read more</button>
            <p className='time'>{time(article.publishedAt)}</p>
           </div>
          </div> }
          </div>  
        ))
      )}
      </div>
    </div>
  );
}

export default Generalnews;

