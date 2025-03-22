import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsBoard.css"
import { API_KEY } from '../../data'

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
      // fetch('https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}', {
      //   method: 'GET',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Upgrade-Insecure-Requests': '1'
      //   }
      // })
      //   .then(response => {
      //     if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      //     return response.json();
      //   })
      //   then(data=> setArticles(data.articles))
      //   .catch(error => console.error('Error:', error));
      
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

    },[category])
  return (
    <div className="inner-content">
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles?.map((news,index)=>{
        return <NewsItem key ={index} news={news}/>
      })}
    </div>
  )
}

export default NewsBoard
