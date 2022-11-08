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
        {bookList && (
          <main className="bookmarks-list">
            <ul>
              {bookList.map((item: Bookmark, index: number) => {
                return (
                  <li key={index}>
                    <img src={`chrome://favicon/${item.url}`} />
                    <a>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </main>
        )}

        <footer className="app-footer"></footer>
      </div>
    </div>
  );
};

export default Popup;
