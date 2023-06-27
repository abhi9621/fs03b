function createbutton(){
document.getElementById("container");
var button= document.createElement("button");
button.innerHTML = "CLICK ME";

document.getElementById("container").appendChild(button);
button.addEventListener("click", function(){
    alert("button clicked!");
});
}
createbutton();