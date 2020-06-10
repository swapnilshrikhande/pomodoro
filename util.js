let notify = function(message){
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification(message);
    }  else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification(message);
            }
        });
    }
};

let notifyTone = function(){
    let src = './audio/goes-without-saying.mp3';
    let audio = new Audio(src);
    audio.play();
}

export {notify,notifyTone};