import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us", // Default to "us" as per your example
    pagesize: 10,   // Adjusted to match your request
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;

    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  // Fetch more news data when scrolling
  async fetchMoreData() {
    this.setState({ page: this.state.page + 1 });

    // Construct the correct API request URL
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1a411971cb414b7c9180e3a936b0cd3c&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData); // Debug: check the response

      // Update state with new articles
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    } catch (error) {
      console.error("Error fetching news data:", error);
      this.setState({
        articles: [],
        totalResults: 0,
      });
    }
  }

  // Fetch initial news data
  async updatenews() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1a411971cb414b7c9180e3a936b0cd3c&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });

    try {
      let data = await fetch(url);
      this.props.setProgress(20);
      let parsedData = await data.json();
      this.props.setProgress(50);
      console.log(parsedData); // Debug: check the response

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news data:", error);
      this.setState({
        articles: [],
        totalResults: 0,
        loading: false,
      });
    }
    this.props.setProgress(100);
  }

  // Component did mount to load data
  async componentDidMount() {
    await this.updatenews();
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0" }}>
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
        <div className="container">
          <div className="row">
            {Array.isArray(this.state.articles) && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
