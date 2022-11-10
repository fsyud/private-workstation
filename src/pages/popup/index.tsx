import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Popup from "./Popup";
import BooksMarksMain from "./BooksMarksMain";
import "@pages/popup/index.css";

// 声明Context的数据模型
interface CountProps {
  inputVal?: string;
  setInputVal?: (e: any) => void;
}

export const AppContext = React.createContext({} as CountProps);

function pageInit() {
  const [inputVal, setInputValInit] = useState<string>();

  const AppPopup = document.querySelector("body");


  const setInputVal = (val: any) => {
    setInputValInit(val)
  }

  if (!AppPopup) {
    throw new Error("Can not find AppPopup");
  }

  ReactDOM.createRoot(AppPopup).render(
    <AppContext.Provider value={{ inputVal, setInputVal }}>
      <Popup /> <BooksMarksMain />
    </AppContext.Provider>
  );
}

pageInit();
