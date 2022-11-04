import logo from "@assets/search.svg";
import github from "@assets/github.svg";
import "@pages/popup/Popup.css";

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <input className="app-input" type="text" />

        <div className="app-footer">
          <a
            className="App-link"
            href="https://github.com/ligdy7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Popup;
