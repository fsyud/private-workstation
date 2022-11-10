import { useState, useEffect, useContext } from "react";
import "@pages/popup/BooksMarksMain.css";
import { AppContext } from "./index";
import getBookMarks, { Bookmark } from "@utils/tools/book-marks";

const BooksMarksMain: React.FC<{}> = () => {
  const [bookList, setBookList] = useState<Bookmark[]>([]);

  useEffect(() => {
    getFocusBookMarks();
  }, []);

  const getFocusBookMarks = async () => {
    const BOOKMARKS = await getBookMarks();
    console.log(BOOKMARKS, "BOOKMARKS");
    setBookList(BOOKMARKS.slice(0, 100));
  };

  const { inputVal } = useContext(AppContext);

  console.log(inputVal, "inputVal")

  return (
    <>
      {bookList.length > 0 && (
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
    </>
  );
};

export default BooksMarksMain;
