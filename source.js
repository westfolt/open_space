let pos=170;

window.onload = function (){
    switchOffUI();
    const inputElements = document.querySelectorAll('input');
    for(i=0;i<inputElements.length; i++){
        if( inputElements[i].type == "checkbox" || inputElements[i].type == "range") {
            inputElements[i].onchange = onElementChange;
            /*inputElements[i].addEventListener("change", onElementChange);*/
        }
    }
}


function switchOffUI() {
    let inputs = document.getElementsByName("inputs");
    for (let chk of inputs) {
        chk.setAttribute("disabled", "true");
        if(chk.type == "checkbox"){
            chk.checked = false;
        }
        else if(chk.type == "range"){
            chk.value = 50;
        }
    }
}

function checkReady(){
    console.log("Started check");
    let inputs = document.getElementsByName("inputs");
    for (let chk of inputs) {
        if(chk.type == "checkbox" && chk.checked == false) {
            return false;
        }
        else if(chk.type == "range" && chk.value != 100) {
            return false;
        }
    }
    console.log("It returned true");
    return true;
}

function onElementChange(){
    let launcherButton = document.getElementById("launchButton");
    if(checkReady()) {
        launcherButton.removeAttribute("disabled");
    }
    else {
        launcherButton.setAttribute("disabled", "true");
    }
}

function password_input() {
    const pass = "TrustNo1";/*"TrustNo1";*/
    let userPass = document.getElementById("passField").value;
    console.log(userPass);
    if (pass == userPass) {
        let inputs = document.getElementsByName("inputs");
        for (let chk of inputs) {
            chk.removeAttribute("disabled");
        }
        let passes=document.getElementsByName("passes");
        for(let pass of passes){
            pass.setAttribute("disabled","true");
        }
    }
    onElementChange();
}

function move_rocket(){
    let rocket = document.getElementById("letadlo");
    rocket.style.transform = `rotateZ(30deg) translateX(-550px) translateY(${pos-=20}px) scale(0.2)`;
}

function launch_rocket(){
    let rocket = document.getElementById("letadlo");
    let pos=10;
    let timer=setInterval(move_rocket,1000);
}

