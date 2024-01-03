import React, { useState, useEffect, useMemo } from "react";
import "./main-app.css";
import getBookMarks, { Bookmark } from "@utils/tools/book-marks";
import _debounce from "lodash/debounce";
import logo from "@assets/Search bar_selected.svg";

// 声明Context的数据模型
interface CountProps {
  inputVal?: string;
  setInputVal?: (e: any) => void;
}

export const AppContext = React.createContext({} as CountProps);

const MainApp = () => {
  const [bookList, setBookList] = useState<Bookmark[]>([]);

  const [inputVal, setInputValInit] = useState<string>();

  useEffect(() => {
    getFocusBookMarks();
  }, []);

  const getFocusBookMarks = async () => {
    const BOOKMARKS = await getBookMarks();
    setBookList(BOOKMARKS);
  };

  const handleChange = (e: any): void => {
    setInputValInit(e.target.value);
  };

  const SearchList = useMemo(() => {
    if (!inputVal) {
      return [];
    }

    return bookList.filter((s) =>
      s.title.toLowerCase().includes(inputVal.toLowerCase())
    );
  }, [inputVal, bookList]);

  return (
    <>
      <header className="app-header">
        <div className="app-logo">
          <img src={logo} alt="logo" />
        </div>
        <input
          className="app-input"
          type="text"
          placeholder="search bookmarks"
          autoFocus
          onChange={_debounce(handleChange, 300)}
        />
      </header>
      {inputVal && SearchList.length > 0 && <SingleLi List={SearchList} />}

      {!inputVal && (
        <>
          <SingleLi List={bookList.splice(0, 10)} />
          <div className="app-more-text">And More...</div>
        </>
      )}
    </>
  );
};

const SingleLi: React.FC<{ List: Bookmark[] }> = (props) => {
  return (
    <main className="bookmarks-list">
      <ul>
        {props.List.map((item: Bookmark, index: number) => {
          return (
            <li key={index} onClick={() => window.open(item.url)}>
              <div className="list-l">
                {/* <img src={`chrome://favicon/${item.url}`} /> */}
                <a>{item.title}</a>
              </div>
              <strong>{item.title.substring(0, 2)}</strong>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MainApp;
