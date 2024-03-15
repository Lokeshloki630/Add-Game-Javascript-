let fne = document.getElementById("firstNumber");
let sne = document.getElementById("secondNumber");
let userResult = document.getElementById("userResult");
let message = document.getElementById("message");
let successMessage = "congratulations! you got it";
let failureMessage = "please try again";

function restart() {
    let fr=Math.random() * 100;
    let sr =Math.random() * 100;
    fne.textContent=Math.ceil(fr);
    sne.textContent=Math.ceil(sr);
    message.textContent= "";
    userResult.value = "";
}
restart();
function checkbutton() {
    let userresultvalue1 = parseInt(fne.textContent);
    let userresultvalue2 = parseInt(sne.textContent);
    let sum=parseInt(userResult.value);
    if(sum===userresultvalue1+userresultvalue2){
        message.textContent=successMessage;
        message.style.backgroundColor="#028a0f";
    }
    else{
         message.textContent=failureMessage;
        message.style.backgroundColor="#1e217c";
    }
}
checkbutton();