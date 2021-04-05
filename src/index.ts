import "./scss/style.scss";
import APP_HTML from "./html/main-content.html";

export class App {
  constructor() {
    this.injectHTML(APP_HTML);
    console.log("If you see this message, it means that the script has been injected :)");
  }
  private injectHTML(htmlContent: string) {
    document.querySelector("body").insertAdjacentHTML("beforeend", htmlContent);
  }
}

const yourAppInstance = new App();
console.log(yourAppInstance);
