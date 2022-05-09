function createButtons() {
    let number = document.getElementById("nButtons").value;
    let winButton = Math.ceil(Math.random() * number);
    for (let i = 1; i <= number; ++i) {
       button = document.createElement("button");
       button.innerHTML = "<b>Button</b>"; 
       button.id = "i";
       button.style.backgroundColor = "rgb(174, 217, 236)";
       document.getElementById("display").appendChild(button);
       button.onclick = function() {
           if (winButton == i) {
               alert("YOU WON!")
           } else {
               alert("YOU LOST!")
           }
       }
    }
}
