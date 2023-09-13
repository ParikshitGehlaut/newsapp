import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor() {
  //   super();
  //   console.log("I am building newsmonkey");
  // }
  render() {
    let { title, description, imageUrl, newsUrl } = this.props; // Deconstructing
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://kchanews.com/wp-content/uploads/2014/09/bigstock-Breaking-News-Screen-36237841.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
