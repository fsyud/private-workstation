import { useState, useEffect } from "react";
import getBookMarks, { Bookmark } from "@utils/tools/book-marks";
import logo from "@assets/search.svg";
import "@pages/popup/Popup.css";

const Popup = () => {
  const [bookList, setBookList] = useState<Bookmark[]>([]);

  useEffect(() => {
    getFocusBookMarks();
  }, []);

  const getFocusBookMarks = async () => {
    const BOOKMARKS = await getBookMarks();

    setBookList(BOOKMARKS);

    console.log(BOOKMARKS);
  };

  return (
    <div className="App app-light">
      <div className="app-main">
        <header className="app-header">
          <div className="app-logo">
            <img src={logo} alt="logo" />
          </div>
          <input
            className="app-input"
            type="text"
            placeholder="Let's search in bookmarks"
            autoFocus
          />
        </header>
        <main className="bookmarks-list">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </main>
        <footer className="app-footer"></footer>
      </div>
    </div>
  );
};

export default Popup;
