import { createRoot } from "react-dom/client";
import Popup from "./Popup";
import "@pages/popup/index.css";

function pageInit() {
  const AppPopup = document.querySelector("#app-popup");
  if (!AppPopup) {
    throw new Error("Can not find AppPopup");
  }
  const root = createRoot(AppPopup);
  root.render(<Popup />);
}

pageInit();
