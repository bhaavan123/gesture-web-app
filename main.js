Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera")

function take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
    });
}
console.log("ml5 version-",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WM-o-GF9J/model.json",modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");

}

function Check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);

    
}
 
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
       
         prediction_1 = results[0].label;
       
        
        speak();

        if(results[0].label=="yo"){
            document.getElementById("update_emoji").innerHTML = "&#9996;"
            
        }

        if(results[0].label=="nice"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
            
        }

        if(results[0].label=="thumbsdown"){
            document.getElementById("update_emoji").innerHTML = "&#128078;"
            
        }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data1 = "the pridiction is "+prediction_1;
    

    var utterThis = new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterThis);
}
}