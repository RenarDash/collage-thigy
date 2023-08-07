rec=new window.webkitSpeechRecognition;



function start_listen() {
    document.getElementById("Areaoftexting").innerHTML="";

    rec.start();
}
rec.onresult=function (event){
    console.log(event);
    speechText=event.results[0][0].transcript;
    console.log(speechText);
    document.getElementById("Areaoftexting").innerHTML=speechText;

}
