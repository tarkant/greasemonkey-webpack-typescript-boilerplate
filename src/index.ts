import "./scss/style.scss";
const APP_HTML = require("./html/main-content.html");

export class App {
  constructor() {
    this.injectHTML(APP_HTML);
    console.debug("If you see this message, it means that the script has been injected :)");
  }
  private injectHTML(htmlContent: string) {
    document.querySelector("body").insertAdjacentHTML("beforeend", htmlContent);
  }
}

const yourAppInstance = new App();
console.log(yourAppInstance);
