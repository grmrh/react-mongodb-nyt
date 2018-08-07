import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";
import { Jumbotron } from "../../Components/Jumbotron";
import { Col, Row, Container } from "../../Components/Grid";
import { DeleteBtn } from "../../Components/DeleteBtn"

class Detail extends Component {

  state={
    article: {}
  };

  componentDidMount() {
    API.getArticle(this.props.match.params.id)
    .then(res => this.setState({article: res.data}))
    .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res =>alert("The article " + res.title + " has been successfully deleted"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
                <h1>
                  {this.state.book.title} by {this.state.book.author}
                </h1>
              </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <Link to={"/articles/" + this.state.article._id} >
              <strong>
                {this.state.article.title} in {this.state.article.date}
              </strong>
            </Link>
            <DeleteBtn onClick={() => this.deleteArticle(this.state.article._id)} />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
      );
  }
}

export default Detail;