import React, { Component } from "react";
import axios from "axios";
import './Home.css';
import API from "../../Utils/API";
import { Col, Row, Container } from "../../Components/Grid";
import { Input, FormBtn } from "../../Components/Form";
import { List, ListItem } from "../../Components/List";
import SaveBtn from "../../Components/SaveBtn";

import io from 'socket.io-client';
const socket =  io();

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
    saveButtonDisabled: false,
    notifiedTitle: []
  };

  componentDidMount() {
    console.log("Home component did mount");
    socket.on('NOTIFY_ALL', savedTitle => {
      console.log("data in Home.js ", savedTitle);
      this.setState({ notifiedTitle: [...this.state.notifiedTitle, savedTitle]});                                 
    });
  }

  saveArticle = article => {
    article.saved = true;
    API.saveArticle(article)
      .then(res => {
        console.log('article saved ', res);
      })
      .catch(err => {
        console.log(err);
      });
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
      console.log("articles \n", response);
      this.setState({articles:response, topic: "", startYear: "", endYear: "" });
    })
    .catch(err => console.log(err));
  };
    
  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-2 md-4">
            <h2>Article search</h2>
          </Col>
          <Col size="sm-10 md-8">
            <h2>Notification for saved articles by another reader</h2>
          </Col>
        </Row>
        <Row>
          <Col size="sm-2 md-4">
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
           <Col size="sm-10 md-8">           
             {this.state.notifiedTitle[0] && this.state.notifiedTitle[0].length > 0 ? (  
              <List>         
                {this.state.notifiedTitle.map(r => { 
                  console.log(r);
                  return (
                    <ListItem key={r.index}  >
                      <Col size="md-12">                             
                      <h5><span style={{color:'rgb(255, 0, 0)'}}>An article</span> "{r}" saved by a reader!</h5>
                      </Col>
                    </ListItem>
                )})}
              </List>   
              ) : (
              <h6>No one posted articles yet </h6>            
            )}
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <h2 style={{"marginTop": "5rem"}}>Article search result</h2>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">          
            {this.state.articles[0] && this.state.articles[0]._id && this.state.articles[0]._id.length ? (  
              <List>         
                {this.state.articles.map(article => { 
                  console.log(article);
                  return (
                    <ListItem key={article._id} 
                              disabled={article.saved ? "disabled" : ""} >
                      <Col size="sm-9 md-10">
                      <a href={article.url} target="_blank"><strong><h4>{article.title}</h4></strong></a>                 
                      <h6>{article.date}</h6>
                      </Col>
                      <Col size="sm-3 md-2">
                        <SaveBtn display={article._id ? "in-block" : "none"} 
                                disabled={article.saved ? "disabled" : ""}    
                                onClick={() => this.saveArticle(article)} />
                      </Col> 
                    </ListItem>
                )})}
              </List>   
              ) : (
              <h6>No search result</h6>            
            )}
          </Col>
        </Row>
      </Container>
      );
  };
}

export default Home;