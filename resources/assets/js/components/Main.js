import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "../hoc/Layout/Layout";

/* An example React component */
class Main extends Component {
  constructor() {
    super();
    //Initialize the state in the constructor
    this.state = {
      articles: []
    };
  }

  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch("/api/articles")
      .then(response => {
        return response.json();
      })
      .then(fetchArticles => {
        let articles = fetchArticles.data;
        console.log("articles", articles);

        //Fetched articles are stored in the state
        this.setState({ articles });
      });
  }

  renderArticles() {
    return this.state.articles.map(article => {
      return (
        /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
        <li key={article.id}>
          Title : {article.title} <br />
          Description : {article.body}
        </li>
      );
    });
  }

  render() {
    return (
      <Layout />
      // <div>
      //   <h3>All Articles</h3>
      //   {this.renderArticles()}
      // </div>
    );
  }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/

if (document.getElementById("root")) {
  ReactDOM.render(<Main />, document.getElementById("root"));
}
