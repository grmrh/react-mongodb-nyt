import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { Input, FormBtn } from "../../Components/Form";
import { List, ListItem } from "../../Components/List";
import { SaveBtn } from "../../Components/SaveBtn"

class Search extends Component {

  state={
    articles: [],
    articleSearch: {
      topic: "",
      startYear: Date.now,
      endYear: Date.now
    }
  };

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

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get articles update the articles state
    event.preventDefault();
    if (this.state.articleSearch.topic && this.state.articleSearch.startYear && this.state.articleSearch.endYear) {
      API.scrapeArticles(this.state.articleSearch)
      .then(res => this.setState({articles: res.data}))
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="xs-9 sm-10">
          <Input value={this.state.articleSearch.topic}
                      onChange={this.handleInputChange}
                      name="topic" 
                      placeholder="Topic" />
          <Input value={this.state.articleSearch.startYear} 
                      onChange={this.handleInputChange} 
                      name="startYear" 
                      placeholder="Start year" />
          <Input value={this.state.articleSearch.endYear} 
                      onChange={this.handleInputChange} 
                      name="endYear" 
                      placeholder="End year" />
        </Col>
        <Col size="xs-3 sm-2">
          <FormBtn disabled={!this.state.articleSearch.topic || !this.state.articleSearch.startYear || !this.state.articleSearch.endYear} 
                           onClick={this.handleFormSubmit} > Search </FormBtn>
        </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
          {this.state.articles.length ? (
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
          )}
          </Col>
        </Row>
      </Container>
      );
  }
}

export default Search;