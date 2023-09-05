class PageHandler {
    
    // constructor function
    constructor() {
      if (localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark");
      }

      this.setThemeIcon();
      this.typeWriterManager(); 
      
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

    // setThemeIcon function witin pageHandler class
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
      let emptystatus = "&nbsp;";

      let isDeleting = false;
      
      let typeWriter = () => {
        currentWord = dynamicHeaderTextArray[currentIndex];
        
        // checking if it's in isDeleting mode or not, if true then each time the typeWriter function will be called the currentText will be less than the selected word with 1 index and vice versa 
        if (isDeleting){
          currentText = currentWord.substring(0, currentText.length - 1);
        }

        if (!isDeleting){
          currentText = currentWord.substring(0, currentText.length + 1);
        }

        // console.log(`current text is after if ${currentText}`)

        if (currentText.length == 0){
          dynamicHeaderElement.innerHTML = emptystatus;  
        } else{
          dynamicHeaderElement.innerHTML = currentText;
        }

        
        

        if (!isDeleting && currentText === currentWord){
          console.log(`${!isDeleting && currentText === currentWord}`)
          isDeleting = true;
          setTimeout(typeWriter, 1250);
          
        } else if (isDeleting && currentText/*.length == 1*/ === "") /**/{
          isDeleting = false;
          currentIndex++;
          if (currentIndex == dynamicHeaderTextArray.length){
            currentIndex = 0;
          }
          
          setTimeout(typeWriter, 500);
        } else {
          setTimeout(typeWriter, 80);
          // if (currentText.length == 1 ){
          //   isDeleting = false;
          // }
        }

        
      };

      typeWriter();
      // typeWriterManager function body ends here  
    }


  // pageHandler class ends here    
}



// init function to initialize a new PageHandler() object.
const init = () => {
    new PageHandler();
};
      

// calls the init function once the DOMContentLoaded is loaded
document.addEventListener("DOMContentLoaded", () => init());