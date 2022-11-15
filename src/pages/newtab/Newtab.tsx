import "./Newtab.css";
import * as React from "react";
import { Component } from "react";

const Newtab = () => {
  return (
    <div className="App">
      <div className="background">
        <div
          className="background-item"
          style={{
            backgroundImage:
              'url("https://user-images.githubusercontent.com/26371465/201278743-a00cb617-7911-4977-bbd2-e5fcf7abcc5c.jpg")',
          }}
        ></div>
      </div>
      <header className="apps">
        <div className="intro-middle-wrapper">
          <div className="prompt">
            <h1>You are great today</h1>
            <h3>So try your best today</h3>
          </div>
          <div className="memorandum">
            <textarea />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Newtab;
