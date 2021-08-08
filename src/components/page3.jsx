import React, { Component } from "react";
import searchBar from "./searchBar.png";
import lorem from "./lorem.png";
import name2 from "./name2.png";
import yellowTop from "./yellowTop.png";
import bookmark from "./bookmark.png";
import comment from "./comment.png";
import like from "./like.png";
import pastedGraphic from "./pastedGraphic.png";
import browse from "./browse.png";
import miniBar from "./miniBar.png";
import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import comments from "./commentsBlock.png";
import thumbnail from "./vidThumbnail.png";
import heart from "./coloredHeart.png";
class Page3 extends Component {
  state = {};
  render() {
    console.log("page 3");
    return (
      <div>
        <img
          src={yellowTop}
          alt="yellowTop.png"
          style={{
            width: "85%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: "15%",
          }}
        />
        <img
          src={thumbnail}
          alt="thumbnail.png"
          style={{
            width: "30%",
            height: "70%",
            position: "absolute",
            top: "23%",
            left: "25%",
          }}
        />
        <img
          src={heart}
          alt="heart.png"
          style={{
            width: "4%",
            height: "7%",
            position: "absolute",
            top: "25%",
            left: "60%",
          }}
        />
        <img
          src={bookmark}
          alt="bookmark.png"
          style={{
            width: "4%",
            height: "7%",
            position: "absolute",
            top: "25%",
            left: "80%",
          }}
        />
        <img
          src={comment}
          alt="comment.png"
          style={{
            width: "4%",
            height: "7%",
            position: "absolute",
            top: "25%",
            left: "70%",
          }}
        />
        <img
          src={p1}
          alt="p1.png"
          style={{
            width: "5%",
            height: "9%",
            position: "absolute",
            top: "40%",
            left: "60%",
          }}
        />
        <img
          src={p2}
          alt="p2.png"
          style={{
            width: "5%",
            height: "9%",
            position: "absolute",
            top: "52%",
            left: "60%",
          }}
        />
        <img
          src={p3}
          alt="p3.png"
          style={{
            width: "5%",
            height: "9%",
            position: "absolute",
            top: "64%",
            left: "60%",
          }}
        />

        <img
          src={comments}
          alt="lorem.png"
          style={{
            width: "25%",
            height: "30%",
            position: "absolute",
            top: "42%",
            left: "68%",
          }}
        />
        {/* <img
          src={lorem}
          alt="lorem.png"
          style={{
            width: 362,
            height: 52,
            position: "absolute",
            top: "54%",
            left: "68%",
          }}
        />
        <img
          src={lorem}
          alt="lorem.png"
          style={{
            width: 362,
            height: 52,
            position: "absolute",
            top: "66%",
            left: "68%",
          }}
        /> */}
        <img
          src={searchBar}
          alt="searchBar.png"
          style={{
            width: "30%",
            height: "6%",
            position: "absolute",
            top: "6%",
            left: "40%",
          }}
        />
        <img
          src={browse}
          alt="browse.png"
          style={{
            width: "17%",
            height: "15%",
            position: "absolute",
            top: "8%",
            left: "17.7%",
          }}
        />
        <img
          src={miniBar}
          alt="miniBar.png"
          style={{
            width: "0.8%",
            height: "9%",
            position: "absolute",
            top: "30%",
            left: "0%",
          }}
        />
      </div>
    );
  }
}

export default Page3;
