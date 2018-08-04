import React, { Component } from "react";
import API from "../../Utils/API";
// import  Link  from "react-router-dom";
// import { Input, FormBtn } from "../../Components/Form";
// import { List, ListItem } from "../../Components/List";
// import  SaveBtn  from "../../Components/SaveBtn";
// import  Jumbotron  from "../../Components/Jumbotron";
import  {Col, Row, Container } from "../../Components/Grid";
import  Card  from "../../Components/Card";

class Saved extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
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
        <Container fluid>
          <Row>
            <Col size="md-12">
              <h2>{this.state.article.title}</h2>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
                <h1 className="text-center">{this.state.blog.title}</h1>
                    <h3>Hello World</h3>
                    <Card
                      title={this.state.blog.title}
                      content={this.state.blog.content}
                      imageSrc={this.state.blog.imageSrc}
                      createdDt={this.state.blog.created_dt}
                    />
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Saved;
