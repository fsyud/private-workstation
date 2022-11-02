import { createRoot } from "react-dom/client";
import Options from "./Options";
import "@pages/options/index.css";
// import refreshOnUpdate from "virtual:reload-on-update-in-view";

// refreshOnUpdate("pages/options");

function optionsInit() {
  const AppOptions = document.querySelector("#app-options");
  if (!AppOptions) {
    throw new Error("Can not find AppOptions");
  }
  const root = createRoot(AppOptions);
  root.render(<Options />);
}

optionsInit();
