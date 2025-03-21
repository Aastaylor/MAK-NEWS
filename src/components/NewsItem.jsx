import "./NewsItem.css"
import image from '../assets/Breaking-News.jpg'

const NewsItem = ({news}) => {
  return (
    
    <div className="card bg-dark text-light mb-3 d-inline-block " style={{maxWidth:"345px"}}>
  <img src={news.urlToImage?news.urlToImage:image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{news.title.slice(0,50)}</h5>
    <p className="card-text">{news.description? news.description.slice(0,90):"News delivers timely updates on events, politics, science, and more, keeping us informed."}</p>
    <a href={news.url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
