import { Component } from "react";
import { getURL, postURL } from "../util";

export class Shorten extends Component {
  render() {
    const url = {};
    let started = false;

    window.onkeyup = ({ target, keyCode }) => {
      if (!started) {
        document.getElementById("long-url-submit").onclick =
          handleLongUrlSubmit;
        document.getElementById("short-url-submit").onclick =
          handleShortUrlSubmit;
        document.getElementById("create").onclick = handleCreateShortUrl;

        document.getElementById("press-key").style.visibility = "hidden";
        document.getElementById("url-shortener").style.visibility = "visible";

        started = true;
      }

      if (target.id === "long-url") {
        url.long = target.value;
        if (keyCode === 13) {
          handleLongUrlSubmit();
        }
      }

      if (target.id === "short-url") {
        url.short = target.value;
        if (keyCode === 13) {
          handleShortUrlSubmit();
        }
      }
    };

    function handleLongUrlSubmit() {
      const longUrlMessageElement = document.getElementById("long-url-message");

      if (!url.long) return (longUrlMessageElement.innerHTML = "That's empty!");

      if (
        !url.long.startsWith("http://" && "https://") ||
        !url.long.includes(".")
      ) {
        return (longUrlMessageElement.innerHTML = "That's not a valid URL!");
      }

      submit(url.long, longUrlMessageElement);
    }

    function handleShortUrlSubmit() {
      const shortUrlMessageElement =
        document.getElementById("short-url-message");

      if (!url.short)
        return (shortUrlMessageElement.innerHTML = "That's empty!");

      if (!/^[a-zA-Z]+$/.test(url.short))
        return (shortUrlMessageElement.innerHTML = "You can only use letters!");

      submit(url.short, shortUrlMessageElement);
    }

    function submit(content = "", messageElement) {
      messageElement.innerHTML = `Submitted the URL: ${content}`;
    }

    async function handleCreateShortUrl() {
      const createMessageElement = document.getElementById("create-message");
      if (!url.short)
        return (createMessageElement.innerHTML =
          "There's no (valid) short URL submitted!");
      if (!url.long)
        return (createMessageElement.innerHTML =
          "There's no (valid) long URL submitted!");

      console.log(
        "🚀 ~ file: shorten.jsx ~ line 80 ~ Shorten ~ handleCreateShortUrl ~ await getURL(url.short)",
        await getURL(url.short)
      );

      if ((await getURL(url.short)).data)
        return (createMessageElement.innerHTML =
          "Sorry, that short URL already exists!");

      createMessageElement.innerHTML = `Shortened URL: <a href="http://localhost:3000/${url.short}">http://localhost:3000/${url.short}</a>`;

      await postURL(url);
    }

    return (
      <div>
        <h1>Url Shortener</h1>
        <h2 id="press-key">Press any key to start!</h2>

        <div style={{ visibility: "hidden" }} id="url-shortener">
          <h2>The long url</h2>

          <input id="long-url" placeholder="https://example.com/long" />
          <button id="long-url-submit">Submit</button>
          <p id="long-url-message"></p>

          <h2>The short url</h2>

          <label>http://localhost:3000/</label>
          <input id="short-url" placeholder="example" />
          <button id="short-url-submit">Submit</button>
          <p id="short-url-message"></p>

          <button id="create">Create</button>
          <p id="create-message"></p>
        </div>
      </div>
    );
  }
}
