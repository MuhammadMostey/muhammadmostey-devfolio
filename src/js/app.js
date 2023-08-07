class PageHandler {
    
    constructor() {
      if (localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark");
      }

      document.querySelector("#colorSwitch").addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");

        if (localStorage.getItem("theme") == "dark"){
          localStorage.setItem("theme", "");
        }
        else {
          localStorage.setItem("theme", "dark");
        }
      });

    }


}

const init = () => {
    new PageHandler();
};
      

document.addEventListener("DOMContentLoaded", () => init());