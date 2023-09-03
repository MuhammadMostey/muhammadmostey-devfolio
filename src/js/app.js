class PageHandler {
    
    // constructor function
    constructor() {
      if (localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark");
      }

      this.setThemeIcon();
      // this.typeWriterManager();  // uncomment once finish this function dev
      
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


    // typeWriterManager function, switchs between the titles on the homepage as per the given array.
    
    typeWriterManager(){

      let dynamicHeaderElement = document.querySelector("#dynamic-header-text");
      if (dynamicHeaderElement === null) return;
      
      let dynamicHeaderTextArray = ["Full Stack Developer", "Java Developer", "Python Developer"];
      let currentIndex = 0;
      let currentWord = dynamicHeaderTextArray[currentIndex];
      let currentText = dynamicHeaderTextArray[currentIndex];
      
      let isDeleting = false;
      
      let typeWriter = () => {
        // build here the logik of text Funktion 11:23

        currentWord = dynamicHeaderElement[currentIndex];
        
        if(isDeleting){
          currentText = currentWord.substring(0, currentText.length-1);
        }

        if(!isDeleting){
          currentText = currentWord.substring(0, currentText.length+1)
        }

        dynamicHeaderElement.innerHTML = currentText;

        
      }

      typeWriter()

    }


  // pageHandler class ends here    
}




const init = () => {
    new PageHandler();
};
      

// calls the init function once the DOMContentLoaded is loaded
document.addEventListener("DOMContentLoaded", () => init());