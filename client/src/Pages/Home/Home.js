import React, { Component } from "react";
import axios from "axios";
import API from "../../Utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { Input, FormBtn } from "../../Components/Form";
import { List, ListItem } from "../../Components/List";
import SaveBtn from "../../Components/SaveBtn"

class Home extends Component {

  state={
    articles: [],
    topic: "",
    startYear: "",
    endYear: "",
    _id: 0,
    title: "",
    date: Date.now,
    url: ""
  };

  // componentDidMount() {
  //   this.loadArticles();
  // }

  // loadArticles = () => {
  //   API
  //     .scrapeArticles()
  //     .then(res => alert(res))
  //     // .then(res => this.setState({articles: res.data}))
  //     .catch(err => console.log(err));
  // };

  saveArticle = id => {
    API.saveArticle(id)
      .then(res =>console.log(res))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  buildQueryURL = () => {

    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    // add the api key parameter (the one we received when we registered)
    queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    // grab text the user typed into the search input, add as parameter to url
    queryURL += "&q=" + this.state.topic;
    // if the user provides a startYear, include it in the queryURL
    let startYear = this.state.startYear;
    if (parseInt(startYear, 10)) {
      queryURL += "&begin_date=" + startYear + "0101";
    }
    // if the user provides an endYear, include it in the queryURL
    var endYear = this.state.endYear;
    if (parseInt(endYear, 10)) {
      queryURL += "&end_date=" + endYear + "0101";
    }
    return queryURL;
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get articles update the articles state
    event.preventDefault();

    // build query string
    const queryURL = this.buildQueryURL();
    let post=[];
   // API.getNYTArticles(queryURL)
    axios.get(queryURL)
    .then(res => {
      
      //let article = {};
      //console.log(response.response.docs[0]);
      console.log(res.data.response.docs[0]);
      const data = res.data.response.docs;
      const result = data.length > 10 ? data.slice(0, 10) : data;
      console.log(result[0]._id, result[0].headline.main, result[0].web_url, result[0].pub_date);
      post = result.map(a => {
        this.setState({_id: a._id});
        this.setState({title: a.headline.main});
        this.setState({url: a.web_url});
        this.setState({date: a.pub_Date});
        return;
        });
      this.setState({articles: post});
      })
    .catch(err => console.log(err));
  }
    
  render() {
    return (
      <Container>
        <Row>
          <Col size="xs-9 sm-10">
            <Input value={this.state.topic}
                        onChange={this.handleInputChange}
                        name="topic" 
                        placeholder="Topic" />
            <Input value={this.state.startYear} 
                        onChange={this.handleInputChange} 
                        name="startYear" 
                        placeholder="Start year" />
            <Input value={this.state.endYear} 
                        onChange={this.handleInputChange} 
                        name="endYear" 
                        placeholder="End year" />
            <FormBtn 
              // disabled={!this.state.articleSearch.topic || !this.state.articleSearch.startYear || !this.state.articleSearch.endYear} 
              onClick={this.handleFormSubmit} > Search </FormBtn>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
          {/* {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <Link to={"/articles/" + article._id} >
                    <strong>
                      {article.title} in {article.date}
                    </strong>
                  </Link>
                  <SaveBtn onClick={() => this.saveArticle(article._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h2>No search results </h2>
          )} */}
          </Col>
        </Row>
      </Container>
      );
  }
}

export default Home;