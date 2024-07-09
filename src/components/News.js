import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export default class News extends Component {
 static defaultProps={
  country:"us",
  category:"entertainment"
 }
  static propTypes={
country:PropTypes.string.isRequired,
category:PropTypes.string
  }
  constructor(props){
    super(props);
    console.log("constructer call")
    this.state={
      articles:[],
      loading:false,
      page:1
    

    } 
  document.title=`${props.category}-NewsMonkey`
}
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=394ceb0f4b734ac5bfe32a32332b22c5`
      let data= await fetch(url);
      //let parsedData= await JSON.parse(data)
      let parsedData= await data.json()
      console.log(parsedData)
      this.setState({articles:parsedData.articles})
    }
    handleNextClick=async()=>{
      console.log("Next click")
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=394ceb0f4b734ac5bfe32a32332b22c5&page=${this.state.page+1}`
      let data= await fetch(url);
      
      let parsedData= await data.json()
      console.log(parsedData)
      //this.setState({articles:parsedData.articles})
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles

      })
    }
    handlePreClick=async ()=>{
      console.log("Previous click")
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=394ceb0f4b734ac5bfe32a32332b22c5&page=${this.state.page-1}`
      let data= await fetch(url);
      
      let parsedData= await data.json()
      console.log(parsedData)
      //this.setState({articles:parsedData.articles})
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles

      })
    }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey -Top Headlines</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
        return  <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} />
      </div>
        })}      
        </div>
        <div className="container my-2 d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr;Previous</button>
        <button  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      
      </div>
    )
  }
}
