import React from 'react';
import './NewsApp.css'
import MoreButton from "./components/MoreButton";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Sources from "./components/Sources";
import NoData from "./components/NoData";
import News from "./components/News";
import Footer from "./components/Footer";

class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.apiKey = 'c1e2a24742f64211844e5d6342adcf1a';
    this.curPage = 0;
    this.endPage = 8;
    this.searchQuery = '';
    this.lastRequest = '';
    this.loadMore = true;
    this.state = {
      articles: [],
      sources: []
    }
  }

  componentDidMount() {
    this.loadData(`sources?`, this.processSources.bind(this));
    this.handleSearchClick();
  }

  processArticles(json) {
    const freshArticles = json.articles;
    if (freshArticles.length)
      this.curPage++;
    if (this.curPage === this.endPage || freshArticles.length < 5)
      this.loadMore = false;
    this.setState((state) => ({articles: state.articles.concat(json.articles)}));
  }

  processSources(json) {
    this.setState({sources: json['sources']});
  }

  handleFilterClick(e) {
    if (!e.target.id)
      return;
    this.state.articles = [];
    this.curPage = 0;
    this.loadMore = true;
    this.loadData(`everything?sources=${e.target.id}`, this.processArticles.bind(this));
  }

  handleSearchClick(e) {
    const req = this.searchQuery;
    const query = req.trim() ? `everything?q=${req}` : `top-headlines?country=us`;
    this.state.articles = [];
    this.curPage = 0;
    this.loadData(query, this.processArticles.bind(this));
  }

  handleSearchChange(e) {
    this.searchQuery = e.target.value;
  }

  handleSearchKeyUP(e) {
    if (e.keyCode === 13)
      this.handleSearchClick(e);
  }

  handleLoadMoreClick() {
    this.loadData(null, this.processArticles.bind(this));
  }

  loadData(query, func) {
    if (!query) {
      query = this.lastRequest;
    } else {
      this.lastRequest = query;
    }
    const url = `https://newsapi.org/v2/${query}&pageSize=5&page=${this.curPage + 1}&apiKey=${this.apiKey}`;
    const request = new Request(url);
    fetch(request).then((response) => response.json()).then((myJson) => func(myJson));
  }

  render() {
    return (
        <body>
        <div className="content">
          <Header title='Hot News Every Day'>
            <SearchBar
                onChange={this.handleSearchChange.bind(this)}
                onKeyUp={this.handleSearchKeyUP.bind(this)}
                onClick={this.handleSearchClick.bind(this)}
            />
            <Sources
                sources={this.state.sources}
                onClick={this.handleFilterClick.bind(this)}
            />
          </Header>
          <main>
            {this.state.articles.length
                ? <News articles={this.state.articles}/>
                : <NoData/>
            }
            {this.loadMore
                ? <MoreButton onClick={this.handleLoadMoreClick.bind(this)}/>
                : null
            }
          </main>
        </div>
        <Footer/>
        </body>
    );
  }
}

export default NewsApp;
