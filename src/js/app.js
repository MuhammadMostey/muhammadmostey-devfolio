class PageHandler {
    
    // constructor function
    constructor() {
      if (localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark");
      }

      this.setThemeIcon();
      
      document.querySelector("#colorSwitch").addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");

        if (localStorage.getItem("theme") == "dark"){
          localStorage.setItem("theme", "");
        }
        else {
          localStorage.setItem("theme", "dark");
        }

        this.setThemeIcon();

      });

    }

    // setThemeIcon function
    setThemeIcon(){
        let colorSwitch = document.querySelector("#colorSwitch");
        if (colorSwitch === null) return;
        
        if(localStorage.getItem("theme") == "dark"){
            colorSwitch.innerHTML = `
                <img src="/icons/sun.svg" alt="sun" class="w-5 h-5" />
            `
        } else{
            colorSwitch.innerHTML =`
                <img src="/icons/moon.svg" alt="moon" class=" w-5 h-5" />
            `
        }

    }

  // pageHandler class ends here    
}




const init = () => {
    new PageHandler();
};
      

// calls the init function once the DOMContentLoaded is loaded
document.addEventListener("DOMContentLoaded", () => init());