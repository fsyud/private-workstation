import { useState, useEffect } from "react";
import getBookMarks, { Bookmark } from "@utils/tools/book-marks";
import logo from "@assets/search.svg";
import "@pages/popup/Popup.css";
import { useMemo } from "react";

const Popup = () => {
  const [bookList, setBookList] = useState<Bookmark[]>([]);

  const [value, setValue] = useState<string>();

  useEffect(() => {
    getFocusBookMarks();
  }, []);

  const getFocusBookMarks = async () => {
    const BOOKMARKS = await getBookMarks();
    console.log(BOOKMARKS, "BOOKMARKS");

    setBookList(BOOKMARKS);
  };

  const BooksFilterList = useMemo(() => {
    if (!value) {
      return bookList.slice(0, 10);
    } else {
      return bookList.filter((s) => s.title.includes(value));
    }
  }, [value]);

  const handleChange = (e: any): void => {
    setValue(e.target.value);
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
            onChange={handleChange}
          />
        </header>

        {BooksFilterList.length > 0 ? (
          <main className="bookmarks-list">
            <ul>
              {BooksFilterList.map((item: Bookmark, index: number) => {
                return (
                  <li key={index}>
                    <img src={`chrome://favicon/${item.url}`} />
                    <a>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </main>
        ) : (
          <span>loading...</span>
        )}

        <footer className="app-footer"></footer>
      </div>
    </div>
  );
};

export default Popup;
