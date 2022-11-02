import React from "react";
import { createRoot } from "react-dom/client";
import Panel from "@pages/panel/Panel";
import "@pages/panel/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/panel");

function init() {
  const AppPanel = document.querySelector("#app-panel");
  if (!AppPanel) {
    throw new Error("Can not find AppPanel");
  }
  const root = createRoot(AppPanel);
  root.render(<Panel />);
}

init();
