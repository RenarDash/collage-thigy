var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start_listen()
{
    recognition.start();
} 
recognition.onresult=function(event){
    Content=event.results[0][0].transcript;
    document.getElementById("Areaoftexting").innerHTML=Content;
    if(Content=="take my selfie"){
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        imge_id="s1";
        take_snapshot();
        speak_data="taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    },5000)
    
    setTimeout(function(){
        imge_id="s2";
        take_snapshot();
        speak_data="taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    },10000)
    
    setTimeout(function(){
        imge_id="s3";
        take_snapshot();
    
    },15000)


}
function take_snapshot() {
    Webcam.snap(function(selfie_data){
        if (imge_id=="s1") {
            document.getElementById("result1").innerHTML='<img id="s1" src="'+selfie_data+'"/>';
        }
        if (imge_id=="s2") {
            document.getElementById("result2").innerHTML='<img id="s2" src="'+selfie_data+'"/>';
        }
        if (imge_id=="s3") {
            document.getElementById("result3").innerHTML='<img id="s3" src="'+selfie_data+'"/>';
        }
    })
}