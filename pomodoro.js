import {notify,notifyTone} from './util.js'

let pomodoro = function(options){

    let timer = 0;
    let intervalID;
    
    let startTimer = function(){

        setDisplayText("Pomodoro Started, stay focused..");
        //run every minute
        intervalID = window.setInterval(refresh, 1000 * 60 );
    }

    let resetTimer = function(){
        timer=0;
        window.clearInterval(intervalID);
        updateUI();
        setDisplayText("Start Focusing Now !");
    }

    let showNotification = function(){
       notify("Time for a break !");
       notifyTone();
    }

    let refresh = function(){
        ++timer;
        if( timer === 20 ){
            showNotification();
            resetTimer();
        } else {
            updateUI();
        }
    }

    let updateUI = function(){
        setDisplayText(`Stayed focused for ${timer} minutes, keep going..`);
    }

    let setDisplayText = function(text){
        let selector = options.el || "#pomodoro";
        let element  = document.querySelector(selector);
        element.innerText =  text;
    }

    let init = function() {
        setDisplayText("Start Focusing Now !");
    }

    init();

    return {
        "startTimer" : startTimer,
        "resetTimer"  : resetTimer
    }

};

export default pomodoro;

