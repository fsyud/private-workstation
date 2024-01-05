import ReactDOM from "react-dom/client";
import Single from "./Single";
import "@pages/single/Single.css";

function optionsInit() {
  const AppOptions = document.querySelector("#single-options");
  if (!AppOptions) {
    throw new Error("Can not find AppOptions");
  }
  ReactDOM.createRoot(AppOptions).render(<Single />);
}

optionsInit();
