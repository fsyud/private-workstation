import ReactDOM from "react-dom/client";
import Panel from "@pages/panel/Panel";
import "@pages/panel/index.css";

function init() {
  const AppPanel = document.querySelector("#app-panel");
  if (!AppPanel) {
    throw new Error("Can not find AppPanel");
  }

  ReactDOM.createRoot(AppPanel).render(<Panel />);
}

init();
