import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./Popup";
import BooksMarksMain from "./BooksMarksMain";
import "@pages/popup/index.css";

export const AppContext = React.createContext("");

function pageInit() {
  const AppPopup = document.querySelector("body");
  if (!AppPopup) {
    throw new Error("Can not find AppPopup");
  }

  ReactDOM.createRoot(AppPopup).render(
    <AppContext.Provider value={"520"}>
      <Popup /> <BooksMarksMain />
    </AppContext.Provider>
  );
}

pageInit();
