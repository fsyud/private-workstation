import React, { useState } from "react";
import bg1 from "@assets/bg1.jpg";
import bg2 from "@assets/bg2.jpg";
import bg3 from "@assets/bg3.jpg";
import bg4 from "@assets/bg4.jpg";
import "./NewTab.css";

// const imgUrl =
//   "https://user-images.githubusercontent.com/26371465/201278743-a00cb617-7911-4977-bbd2-e5fcf7abcc5c.jpg";

const statementList: string[] = [
  "Give it a try.",
  "Go for it.",
  "Why not?",
  "It's worth a shot.",
  "What are you waiting for?",
  "What do you have to lose?",
  "You might as well.",
  "Just do it.",
  "Follow your dreams.",
  "Reach for the stars.",
  "Do the impossible.",
  "Believe in yourself.",
  "The sky is the limit.",
];

const imageBackground: any[] = [bg1, bg2, bg3, bg4];

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const NewTab = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <BgElement imageBackground={imageBackground} />
      <header className="apps">
        <div className="intro-middle-wrapper">
          <div className="prompt">
            <h1>{statementList[getRandomInt(statementList.length)]}</h1>
            <h3>So try your best today</h3>
          </div>
        </div>

        <div className="memorandum">
          <div className={`tool-box ${visible && "tool-box-active"}`}>
            <button
              className="btn-main btn-common pink"
              onClick={() => setVisible(!visible)}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>

            <div className="too-box-list">
              <a className="btn-common yellow">
                <i className="fa  fa-search" aria-hidden="true"></i>
              </a>
              <a className="btn-common blue">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </a>
              <a className="btn-common green">
                <i className="fa fa-google" aria-hidden="true"></i>
              </a>
              <a className="btn-common purple">
                <i className="fa fa-map-o" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const BgElement = React.memo(function Greeting({
  imageBackground,
}: {
  imageBackground: any[];
}) {
  return (
    <div className="background">
      <div
        className="background-item"
        style={{
          backgroundImage: `url(${
            imageBackground[getRandomInt(imageBackground.length)]
          })`,
        }}
      ></div>
    </div>
  );
});

export default NewTab;
