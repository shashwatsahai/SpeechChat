const synth = window.speechSynthesis;
var start = function(){
    var intext = $('.in')[0].value
    
    console.log(intext);
    speak();
}

var voices = [];
const getVoices = () =>{
    voices = synth.getVoices();
console.log("Voices loaded"); 
if(synth.onvoiceschanged!==undefined)
    speak();
}

const speak=()=>{
    if(synth.speaking){
        console.log("Already speaking");
        return;
    }
    var intext = $('.in')[0].value
    if(intext!==''){
        const speakText = new SpeechSynthesisUtterance(intext);
        speakText.onend = e =>{
            console.log("Done speaking");
        }
        speakText.onerror = e =>{
            console.log("Error");
        }   
        console.log(voices)
        speakText.voice=voices[0];
       
        debugger;
        synth.speak(speakText);
    }

}