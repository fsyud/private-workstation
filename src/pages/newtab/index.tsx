import { createRoot } from "react-dom/client";
import Newtab from "./Newtab";
import "@pages/newtab/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/newtab");

function newTabInit() {
  const AppNewTab = document.querySelector("#app-newtab");
  if (!AppNewTab) {
    throw new Error("Can not find AppNewTab");
  }
  const root = createRoot(AppNewTab);
  root.render(<Newtab />);
}

newTabInit();
