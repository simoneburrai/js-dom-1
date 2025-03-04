

const lampElement = document.getElementById("lamp");
lampElement.addEventListener("click", function(){
    const lampOn = "../img/yellow_lamp.png";
        lampElement.src = lampOn;
        console.log(lampElement.src);
        lampElement.classList.add("position");
})


