import React, { Component } from "react";
import API from "../utils/API";
import Discover from "./pages/Discover";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.random()
    .then(res => this.setState({results: res.data.message}))
    .catch(err => console.log(err));
    console.log(this.state.results)
  }

  searchDogs = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
    <div>
        <Discover
        results={this.state.results}/>

    </div>
    );
  }
}

export default SearchResultContainer;