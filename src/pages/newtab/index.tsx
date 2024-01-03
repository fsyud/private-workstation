import ReactDOM from "react-dom/client";
import Newtab from "./Newtab";
import "@pages/newtab/index.css";
import "@pages/newtab/Todo/index.css";

function newTabInit() {
  const AppNewTab = document.querySelector("#app-newtab");
  if (!AppNewTab) {
    throw new Error("Can not find AppNewTab");
  }
  ReactDOM.createRoot(AppNewTab).render(<Newtab />);
}

newTabInit();
