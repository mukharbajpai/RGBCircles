var numscircles=6;
var colors= generateRandomColors(numscircles);
var i;
var circles= document.querySelectorAll(".circle");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton  = document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numscircles=3;
    colors= generateRandomColors(numscircles);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    for(i=0 ; i<circles.length ;i++){
        if(colors[i]){
            circles[i].style.background = colors[i];
        }
        else{
            circles[i].style.display="none";
        }
    }
    
});
hardBtn.addEventListener("click", function(){
   easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numscircles=6;
    colors= generateRandomColors(numscircles);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    for(i=0 ; i<circles.length ;i++){
            circles[i].style.background = colors[i];
            circles[i].style.display="block";        
    }
});
resetButton.addEventListener("click" , function(){
    //generate all new colors
   colors=generateRandomColors(numscircles);
    //pick new rand color
    pickedColor=pickColor();
    //chaneg color display to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent="New Colors";
    messageDisplay.textContent="";
    //change colors of circles
    //var array=["rgb(151, 152, 71)"];
    for(i=0 ; i<circles.length ;i++){
      
        circles[i].style.background = colors[i];
    }
    h1.style.background="rgb(203, 129, 28)";
});

colorDisplay.textContent= pickedColor;

for(i=0; i< circles.length; i++){
    //add initial colors to circles
    circles[i].style.background = colors[i];
    
    //add click  listener to circles
     circles[i].addEventListener("click",function(){
         
        //grab  clicked circle
        var clickedColor= this.style.background;
         
        //comparing it to picked color
          
        if (clickedColor === pickedColor)      
        {      
           messageDisplay.textContent="Correct!";
            resetButton.textContent="Play Again";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else{
           //alert("Wrong");
            this.style.background ="#232323";
            messageDisplay.textContent ="Try Again";
        }       
    });
}
function changeColors(color){
    //loop through all circles
    for(i=0; i<circles.length;i++)
        {
            //change each color to match the given color
            circles[i].style.background = color;
            
        }  
    
}
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
    
}
function generateRandomColors(num){
    //make an array
    var arr=[];
    //add num random colors
    //repeat for loop num number of times
    for(i=0;i<num;i++)
        {
            //getting  random colors and pushing into array
            arr.push(randomColor());
        }
    //return that array
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);//pick RED 0 to 255
    var g = Math.floor(Math.random()*256);//pick green 0 to 255
    var b = Math.floor(Math.random()*256); //pick blue 0 to 255
   return "rgb(" + r + ", " + g + ", " + b + ")";  
    
}