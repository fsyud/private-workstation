import "./Newtab.css";

const imgUrl =
  "https://user-images.githubusercontent.com/26371465/201278743-a00cb617-7911-4977-bbd2-e5fcf7abcc5c.jpg";

const Newtab = () => {
  return (
    <div className="App">
      <div className="background">
        <div
          className="background-item"
          style={{
            backgroundImage: `url(${imgUrl})`,
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
            <div className="tool-box">
              <button className="btn-common">
                <i className="icon-bars"></i>
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
        </div>
      </header>
    </div>
  );
};

export default Newtab;
