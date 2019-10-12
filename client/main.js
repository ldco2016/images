// import the React library
import React from "react";
import ReactDOM from "react-dom";
import ImageList from "./components/image_list";
import "./main.html";

// Create a Component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
