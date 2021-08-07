import React, { Component } from "react";
import searchBar from "./searchBar.png";
import lorem from "./lorem.png";
import name from "./name.png";
import yellowTop from "./yellowTop.png";
import bookmark from "./bookmark.png";
import comment from "./comment.png";
import like from "./like.png";
import pastedGraphic from "./pastedGraphic.png";

class Page3 extends Component {
  state = {};
  render() {
    console.log("page 3");
    return (
      <div>
        <img
          src={pastedGraphic}
          alt="pastedGraphic.png"
          style={{
            width: 436,
            height: 610,
            position: "absolute",
            top: 291,
            left: 398,
          }}
        />
        <img
          src={like}
          alt="like.png"
          style={{
            width: 60,
            height: 60,
            position: "absolute",
            top: 328,
            left: 962,
          }}
        />
        <img
          src={bookmark}
          alt="bookmark.png"
          style={{
            width: 61,
            height: 61,
            position: "absolute",
            top: 327,
            left: 1220,
          }}
        />
        <img
          src={comment}
          alt="comment.png"
          style={{
            width: 60,
            height: 60,
            position: "absolute",
            top: 329,
            left: 1091,
          }}
        />
        <img
          src={name}
          alt="name.png"
          style={{
            width: 70,
            height: 70,
            position: "absolute",
            top: 425,
            left: 893,
          }}
        />
        <img
          src={name}
          alt="name.png"
          style={{
            width: 70,
            height: 70,
            position: "absolute",
            top: 527,
            left: 893,
          }}
        />
        <img
          src={name}
          alt="name.png"
          style={{
            width: 70,
            height: 70,
            position: "absolute",
            top: 629,
            left: 893,
          }}
        />
        <img
          src={name}
          alt="name.png"
          style={{
            width: 70,
            height: 70,
            position: "absolute",
            top: 731,
            left: 893,
          }}
        />
        <img
          src={yellowTop}
          alt="yellowTop.png"
          style={{
            width: "85%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <img
          src={lorem}
          alt="lorem.png"
          style={{
            width: 362,
            height: 52,
            position: "absolute",
            top: 436,
            left: 985,
          }}
        />
        <img
          src={lorem}
          alt="lorem.png"
          style={{
            width: 362,
            height: 52,
            position: "absolute",
            top: 536,
            left: 985,
          }}
        />
        <img
          src={lorem}
          alt="lorem.png"
          style={{
            width: 362,
            height: 52,
            position: "absolute",
            top: 642,
            left: 985,
          }}
        />
        <img
          src={lorem}
          alt="lorem.png"
          style={{
            width: 362,
            height: 52,
            position: "absolute",
            top: 744,
            left: 985,
          }}
        />
        <img
          src={searchBar}
          alt="searchBar.png"
          style={{
            width: 510,
            height: 50,
            position: "absolute",
            top: 57,
            left: 626,
          }}
        />
      </div>
    );
  }
}

export default Page3;
