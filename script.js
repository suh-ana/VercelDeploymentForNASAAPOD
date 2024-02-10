
console.log(`hello hello`);

let imagedefault = "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg";

let imageloading = "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg";

let domTitle = document.getElementById("title");
let domDate = document.getElementById("date");
let domExplanation = document.getElementById("explanation");

let DOMImageforDisplay = document.getElementById("imagefordisplay");
DOMImageforDisplay.src = imagedefault;

function LoadNasaData(){
  console.log(`Enetering LoadNasaData() function`);
  DOMImageforDisplay.src = imageloading;
  // API Details 
  
  let NASAAPIEndPoint = `https://api.nasa.gov/planetary/apod?api_key=ohPAwlRIfXaSUUcpH7yvmbyLwfJZwGul58jrJueP`;
  
  console.log(NASAAPIEndPoint);
  
  fetch(NASAAPIEndPoint).then(
    function(response){
      return response.json();
    }
  ).then (function(json){
    console.log(json);
      
    //show the date 
    domDate.innerHTML = json.date;
    //show explanation 
    domExplanation.innerHTML = json.explanation;
    //title 
    domTitle.innerHTML = json.title;
    //show the image-> ALready have the dom
     DOMImageforDisplay.src = json.url;
    
    
    }
  ).catch(function(error){ //If anywhere above, anything goes wrong then catch block will be executed and that error is shown in the console.
    console.log(error);
  }
 );
}