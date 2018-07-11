import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import SaveBtn from "../../components/SaveBtn";

class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  // searchArticles = (event) => {
  //   event.preventDefault();
  //   API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
  //     .then(res => 
  //         {
  //         this.setState({articles: res.data.response.docs});
  //         console.log(this.state.articles);
  //       }
  //       )
  //       .catch( err => console.log(err));
  // };

  // saveArticleSubmit = (headline, link, date) => {
  //   console.log("Working");
  //     API.saveArticle({
  //       headline: headline,
  //       link: link,
  //       date: date
  //     })
  //       .then(res => console.log("saved article"))
  //       .catch(err => console.log(err));
  // };

  deleteArticleSubmit = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveArticle({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadArticles())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-6">
            <Jumbotron>
              <h1>What Articles Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.searchArticles}
              >
                Submit
              </FormBtn>
            </form>
          </Col> */}
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Saved Articles On My List</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                    <ListItem
                    key={article._id}>
                  <strong>
                    {article.headline}  --
                  </strong>
                <a target='_blank' href={article.link}>
                  {article.link}
                </a>
                --
                    {article.date} --
                    <SaveBtn onClick={() => this.saveArticleSubmit(article.headline.main, article.web_url, article.pub_date)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Saved Articles to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
