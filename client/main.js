// import the React library
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ImageList from "./components/image_list";
import "./main.html";

// Create a Component
class App extends Component {
  render() {
    return (
      <div>
        <ImageList />
      </div>
    );
  }
}

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
  axios
    .get("https://api.imgur.com/3/gallery/hot/viral/0", {
      headers: {
        Authorization: "Client-ID 634743603ce28f3"
      }
    })
    .then(response => console.log(response));
});
