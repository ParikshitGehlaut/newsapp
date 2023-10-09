import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props; // Deconstructing
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: `flex`,
              justifyContent: `flex-end`,
              position: `absolute`,
              right: `0`,
            }}
          >
            <span className=" rounded-pill bg-danger text-white">{source}</span>
          </div>

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
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {date ? new Date(date).toGMTString() : "not known"}
              </small>
            </p>
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
