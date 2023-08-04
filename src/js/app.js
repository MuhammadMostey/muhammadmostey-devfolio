class PageHandler {
    constructor() {
      if (localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark");
      }
    }
}

const init = () => {
    new PageHandler();
};
      

document.addEventListener("DOMContentLoaded", () => init());