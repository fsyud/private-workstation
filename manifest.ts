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
    // background: { service_worker: "background.js" }, 要放在根目录
  chrome_url_overrides: {
    newtab: "src/pages/newtab/index.html",
  },
  web_accessible_resources: [
    {
      resources: ["assets/js/*.js", "assets/css/*.css"],
      matches: ["*://*/*"],
    },
  ],
  permissions: ["bookmarks"],
  // content_scripts: [
  //   {
  //     matches: ["http://*/*", "https://*/*", "<all_urls>"],
  //     js: ["src/pages/content/index.js"],
  //     css: ["assets/css/contentStyle.chunk.css"],
  //   },
  // ],
};

export default manifest;
