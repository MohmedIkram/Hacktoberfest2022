import { Component } from "react";
import { getURL } from "../util";

export class ShortenedURL extends Component {
  render() {
    // console.log(window.location.toString().split("/")[3]);

    getURL(window.location.toString().split("/")[3]).then(({ data }) => {
      if (!data.long)
        return window.location.replace("http://localhost:3000/shorten");

      return window.location.replace(data.long);
    });

    return <h1>LOADING</h1>;
  }
}
