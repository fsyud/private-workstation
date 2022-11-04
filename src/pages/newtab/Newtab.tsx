import "./Newtab.css";

const Newtab = () => {
  return (
    <div className="App">
      <div className="background">
        <div
          className="background-item"
          style={{
            backgroundImage:
              'url("https://user-images.githubusercontent.com/26371465/199908190-06a7d076-0062-4cc8-88be-b568717a82f0.jpg")',
          }}
        ></div>
      </div>
      <header className="apps">
        <div className="intro-middle-wrapper">
          <div className="prompt">
            <h1>Lig dyu you are great today</h1>
            <h3>So try your best today</h3>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Newtab;
