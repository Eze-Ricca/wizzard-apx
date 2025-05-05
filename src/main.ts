import { state } from "./state";
import "./components/buttonEl/button";
import "./components/inputEl/input";
import "./components/headerEl/header";
import "./components/footerEl/footer";
import "./components/textEl/text";
import "./components/selectEl/select";
import { initRouter } from "./routers";
(function () {
  let app: HTMLDivElement = document.querySelector("#app")!;

  initRouter(app);
})();
