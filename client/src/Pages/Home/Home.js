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
    articles: [{
      _id: "",
      title: "",
      url: "", 
      date: "", 
      saved: false
    }],
    topic: "",
    startYear: "",
    endYear: "", 
    saveButtonDisabled: false
    // _id: 0,
    // title: "",
    // date: Date.now,
    // url: ""
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

  saveArticle = article => {
    //const post = this.articles.filter( a => a._id === id);
    API.saveArticle(article)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target and update the appropriate state
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
   // API.getNYTArticles(queryURL)
    axios.get(queryURL)
    .then(res => {
      const data = res.data.response.docs;
      // take top 10 results
      const result = data.length > 10 ? data.slice(0, 10) : data;
      const response = result.map(a => {
        return {
          _id: a._id,
          title: a.headline.main,
          url: a.web_url,
          date: a.pub_date,
          saved: false
        }
      });
      console.log("articels \n", response);
      this.setState({articles:response, topic: "", startYear: "", endYear: "" });
    })
    .catch(err => console.log(err));
  };
    
  render() {

    const disabled = this.state.saveButtonDisabled ? 'disabled' : '';
    return (
      <Container>
        <Row>
          <Col size="xs-9 sm-10">
            <h2 style={{"margin-top": "3rem"}}>Article search</h2>
          </Col>
        </Row>
        <Row>
          <Col size="xs-9 sm-10">
          <form>
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
              disabled={!this.state.topic || !this.state.startYear || !this.state.endYear} 
              onClick={this.handleFormSubmit} > Search </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-9 sm-10">
            <h2 style={{"margin-top": "5rem"}}>Article search result</h2>
          </Col>
        </Row>
        <Row>
          <Col size="xs-9 sm-10">          
            {this.state.articles.length ? (  
              <List>         
                {this.state.articles.map(article => { 
                  console.log(article);
                  return (
                    <ListItem key={article._id} 
                              style={{"display": `${article.saved} ? "in-block" : "none"`}} 
                              disabled={article.saved}                              
                              onClick={() => {article.saved=true;this.saveArticle(article)}} >
                      {/* <Link to={"/articles/" + article._id} > */}
                      <Col size="xs-9 sm-10">
                      {/* <Link to={article.url.replace("localhost:3000/", "")} >
                        <strong><h4>{article.title}</h4></strong>
                      </Link>   */}
                      <a href={article.url}><strong><h4>{article.title}</h4></strong></a>                 
                      <h6>{article.date}</h6>
                      </Col>
                      {/* <Col size="xs-3 sm-2">
                        <SaveBtn display={article._id ? "in-block" : "none"} onClick={() => this.saveArticle(article._id)} />
                      </Col>  */}
                    </ListItem>
                )})}
              </List>   
              ) : (
              <h2>No search results </h2>            
            )}
          </Col>
        </Row>
      </Container>
      );
  }
}

export default Home;