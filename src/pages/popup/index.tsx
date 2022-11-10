import ReactDOM from "react-dom/client";
import MainApp from "./main-app";

import "@pages/popup/index.css";

const pageInit = () => {
  const AppPopup = document.querySelector("#popup-app");

  if (!AppPopup) {
    throw new Error("Can not find AppPopup");
  }

  ReactDOM.createRoot(AppPopup).render(<MainApp />);
};

pageInit();
