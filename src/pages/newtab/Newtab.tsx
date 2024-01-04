import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import TodoList from "./Todo";
import bg1 from "@assets/bg1.jpg";
import bg2 from "@assets/bg2.jpg";
import bg3 from "@assets/bg3.jpg";
import bg4 from "@assets/bg4.jpg";
import bg5 from "@assets/bg5.jpg";
import "./index.css";

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

const imageBackground: any[] = [bg1, bg2, bg3, bg4, bg5];

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const NewTab = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <BgElement imageBackground={imageBackground} />
      <WeatherElement />
      <TodoList />
      <main className="apps">
        <StatementElement statementList={statementList} />

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
      </main>
    </div>
  );
};

const BgElement = React.memo(function BgElement({
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

const StatementElement = React.memo(function StatementElement({
  statementList,
}: {
  statementList: any[];
}) {
  const clockInstance = useRef<any>(null);

  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    startTime();

    return () => {
      clockInstance.current = null;
    };
  }, []);

  const startTime = () => {
    const today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let hhTwo = checkTime(hh);
    let mmTwo = checkTime(mm);
    let ssTwo = checkTime(ss);

    setCurrentTime(hh + ":" + mmTwo + ":" + ssTwo);
    clockInstance.current = setTimeout(startTime, 500);
  };

  const checkTime = (i: number) => {
    let midTime = "";
    if (i < 10) {
      midTime = "0" + i;
    } else {
      midTime = i + "";
    }
    return midTime;
  };

  return (
    <div className="intro-middle-wrapper">
      <TimeElement time={currentTime} />
      <OneStateElement statementList={statementList} />
    </div>
  );
});

const TimeElement = React.memo(function TimeElement({
  time,
}: {
  time: string;
}) {
  return <div className="time_clock">{time}</div>;
});

const OneStateElement = React.memo(function TimeElement({
  statementList,
}: {
  statementList: any[];
}) {
  return (
    <div className="prompt">
      <h1>{statementList[getRandomInt(statementList.length)]}</h1>
      <h3>So try your best today</h3>
    </div>
  );
});

const WeatherElement = React.memo(function StatementElement() {
  const [weatherInfo, setWeatherInfo] = useState<any>({});

  useLayoutEffect(() => {
    fetch(`https://restapi.amap.com/v3/weather/weatherInfo?key=2615d67c4f2119376c7f4e672c374057&city=310000
    `)
      .then((response) => response.json())
      .then((data) => {
        if (data?.info === "OK") {
          setWeatherInfo(data?.lives?.[0] || []);
        }
      });
  }, []);

  // 获取经纬度
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position: any) {
  //     setLat(position.coords.latitude);
  //     currentDatesetLong(position.coords.longitude);
  //   });
  //   console.log("Latitude is:", lat);
  //   console.log("Longitude is:", long);
  // }, [lat, long]);

  return (
    <div className="weather">
      <h2>
        {weatherInfo?.city} {`${weatherInfo?.temperature} °C`}{" "}
        {weatherInfo?.weather}
      </h2>
    </div>
  );
});

export default NewTab;
