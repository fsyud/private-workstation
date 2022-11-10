import React, { useState, useEffect, useMemo } from "react";
import "./main-app.css";
import getBookMarks, { Bookmark } from "@utils/tools/book-marks";
import _debounce from "lodash/debounce";
import logo from "@assets/search.svg";

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
    setBookList(BOOKMARKS.slice(0, 20));
  };

  const handleChange = (e: any): void => {
    setInputValInit(e.target.value);
  };

  const SearchList = useMemo(() => {
    console.log(inputVal, "inputVal");

    console.log(bookList, "bookList");

    if (!inputVal) return bookList;

    return bookList.filter((s) =>
      s.title.toLowerCase().includes(inputVal.toLowerCase())
    );
  }, [inputVal]);

  return (
    <>
      <header className="app-header">
        <div className="app-logo">
          <img src={logo} alt="logo" />
        </div>
        <input
          className="app-input"
          type="text"
          placeholder="Let's search in bookmarks"
          autoFocus
          onChange={_debounce(handleChange, 300)}
        />
      </header>
      {inputVal && SearchList.length > 0 && <SingleLi List={SearchList} />}

      {!inputVal && <SingleLi List={bookList} />}
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
              <img src={`chrome://favicon/${item.url}`} />
              <a>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MainApp;
