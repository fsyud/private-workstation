import { createRoot } from "react-dom/client";
import Popup from "./Popup";
// import refreshOnUpdate from "virtual:reload-on-update-in-view";

// refreshOnUpdate("pages/popup");

function pageInit() {
  const AppPopup = document.querySelector("#app-popup");
  if (!AppPopup) {
    throw new Error("Can not find AppPopup");
  }
  const root = createRoot(AppPopup);
  root.render(<Popup />);
}

pageInit();
