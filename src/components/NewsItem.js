import React, { Component } from 'react'

const NewsItem=(props)=>{
  
  
    let {title,description,imageUrl,newsUrl,date}=props;
    return (
      <div>
        <div className="card" style= {{width: "18rem"}}>
  {/*<img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N5SB6W4S2HKC7I43QZPSB6IASI.JPG&w=1440":imageUrl} className="card-img-top" alt="..."/>*/}
  <img src={imageUrl?imageUrl:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N5SB6W4S2HKC7I43QZPSB6IASI.JPG&w=1440"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p style={{color: "red"}}>{new Date(date).toGMTString()}</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read</a>
  </div>
</div>
      </div>
    )
  
}
export default NewsItem
