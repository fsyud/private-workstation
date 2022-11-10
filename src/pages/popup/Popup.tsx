import { useState } from "react";
import logo from "@assets/search.svg";
import "@pages/popup/Popup.css";

const Popup = () => {
  const [value, setValue] = useState<string>();

  const handleChange = (e: any): void => {
    setValue(e.target.value);
  };

  return (
    <header className="app-header">
      <div className="app-logo">
        <img src={logo} alt="logo" />
      </div>
      <input
        className="app-input"
        type="text"
        placeholder="Let's search in bookmarks"
        autoFocus
        onChange={handleChange}
      />
    </header>
  );
};

export default Popup;
