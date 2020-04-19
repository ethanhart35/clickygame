import React from "react";

function Discover(props) {
  return (
    <div>
      <h1>Discover Page</h1>
      <p>
      This page displays a photo of a random dog retrieved from the [Dog Ceo API](https://dog.ceo/dog-api/). This page contains 2 clickable buttons: one for passing or "thumbs-downing" a dog, and one for picking or "thumbs-upping" a dog. When either button is clicked, a new dog image is loaded from the API. If you "thumbs up" a dog, there is a 1 in 5 chance that the dog likes you too, and the friends count goes up by 1.
      </p>
      <img src={props.results} alt="dogpic"></img>
    </div>
  );
}

export default Discover;