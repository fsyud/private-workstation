import packageJson from "./package.json";

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  icons: {
    "128": "icon-128.png",
  },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "icon-128.png",
  },
  devtools_page: "src/pages/devtools/index.html",
  background: { service_worker: "src/pages/background/index.js" },
  chrome_url_overrides: { // 文档替换
    newtab: "src/pages/newtab/index.html",
  },
};

export default manifest;
