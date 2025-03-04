

const lampElement = document.getElementById("lamp");
const lampOn = "../img/yellow_lamp.png";
const lampOff = "../img/white_lamp.png";
const lampButton = document.getElementById("turnlamp");
lampButton.innerText = "Accendi";

lampButton.addEventListener("click", function(){
    if (lampButton.innerText.includes("Accendi")){
                lampElement.src = lampOn;
                lampElement.classList.add("position");
                lampButton.innerHTML = "Spegni";
    } else {
        lampElement.src = lampOff;
        lampElement.classList.remove("position");
        lampButton.innerHTML = "Accendi";
    }
})


