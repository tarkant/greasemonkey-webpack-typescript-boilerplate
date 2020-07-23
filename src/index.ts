import "./scss/style.scss";
const APP_HTML = require("./html/main-content.html");

export class App {
  constructor() {
    this.injectHTML(APP_HTML);
  }
  private injectHTML(htmlContent: string) {
    document.querySelector("body").insertAdjacentHTML("beforeend", htmlContent);
  }
}

const yourAppInstance = new App();
console.log(yourAppInstance);
