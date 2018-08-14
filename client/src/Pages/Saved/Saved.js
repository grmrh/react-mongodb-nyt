import React, { Component } from "react";
import API from "../../Utils/API";
import { List, ListItem } from "../../Components/List";
import  DeleteBtn  from "../../Components/DeleteBtn";
import  { Col, Row, Container } from "../../Components/Grid";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        this.setState({ articles: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
    .then(res => {
      this.loadArticles();
      console.log(res.data);
      alert("Delete successfully");
    })
    .catch(err => console.log(err));
  }

  displayArticle() {
    API
    .getArticle(this.props.match.params.id)
    .then(res => {
      this.setState({ article: res.data });
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  render() {

    return (
      <Container style={{"marginBottom": "5rem"}}>
        <Row>
          <Col size="md-12">
            <span><h2 style={{"marginTop": "3rem"}}>Articles saved to database</h2></span>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">          
            {this.state.articles[0] && this.state.articles[0]._id && this.state.articles[0]._id.length ? (  
              <List >         
                {this.state.articles.map(article => { 
                  console.log(article);
                  return (
                    <ListItem key={article._id} >
                      <Col size="ms-9 md-10">
                      <a href={article.url} target="_blank" ><strong><h4>{article.title}</h4></strong></a>                 
                      </Col>
                      <Col size="ms-3 md-2">
                        <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                      </Col> 
                    </ListItem>
                )})}
              </List>   
              ) : (
              <h6>No results </h6>            
            )}
          </Col>
        </Row>
      </Container>
      );
  };

}

export default Saved;
