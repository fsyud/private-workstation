import ReactDOM from "react-dom/client";
import Options from "./Options";
import "@pages/options/index.css";

function optionsInit() {
  const AppOptions = document.querySelector("#app-options");
  if (!AppOptions) {
    throw new Error("Can not find AppOptions");
  }
  ReactDOM.createRoot(AppOptions).render(<Options />);
}

optionsInit();
