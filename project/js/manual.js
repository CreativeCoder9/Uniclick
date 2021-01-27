var name, email, subject, message;


const firebaseConfig = {
    apiKey: "AIzaSyDNGGLUfK6OoI6SyFLPqLjp4aLwEPDlw0g",
    authDomain: "uniclick-d1aa5.firebaseapp.com",
    databaseURL: "https://uniclick-d1aa5.firebaseio.com",
    projectId: "uniclick-d1aa5",
    storageBucket: "uniclick-d1aa5.appspot.com",
    messagingSenderId: "44062048491",
    appId: "1:44062048491:web:7e306542791a9fa85d3eae",
    measurementId: "G-R1ZTCZWCSK"
  };

  firebase.initializeApp(firebaseConfig);
  
  var db = firebase.firestore();

document.getElementById("get-started-btn").onmouseover = function() {mouseOver()};
document.getElementById("get-started-btn").onmouseout = function() {mouseOut()};
document.getElementById("our-services-btn").onmouseover = function() {
    document.getElementById("get-started-btn").style.background = "transparent";
};
document.getElementById("our-services-btn").onmouseout = function() {
    document.getElementById("get-started-btn").style.background = "#323233";
};


function mouseOver() {
    document.getElementById("our-services-btn").style.background = "transparent";
}

function mouseOut () {
    document.getElementById("our-services-btn").style.backgroundColor = "#E73F3F"
}

console.log(document.getElementById("sendmessage").innerHTML);
// Thank you plug in------------>
const myform = document.getElementById("myform");
myform.addEventListener("submit" , (e) => {
    e.preventDefault();
    name = formValue("name");
    email = formValue("email");
    message = formValue("message");
    subject = formValue("subject");
    var t = grecaptcha.getResponse();

    0 == t.length ? (alert("reCapcha challenge failed! Please try again!"),
    grecaptcha.reset()) : 
            document.getElementById("sendButton").style.display = "none";
            document.getElementById("sendingStatus1").style.display = "block";
            submitOnFirebase(name, email, subject, message),
            $.ajax({
                url: "https://formspree.io/f/xzbkowwk",
                method: "POST",
                dataType: "json",
                data: {
                name: name,
                email: email,
                subject: subject,
                message: message
                }
            });

})


function formValue(id){
    var inputValue = document.getElementById(id);
    return inputValue.value;
}

function submitOnFirebase( name , email, subject, message){
    db.collection("contactRequest").add({
        Name: name,
        Email: email,
        Subject: subject,
        Message: message
    })
    .then(function(docRef) {
        document.getElementById("sendmessage").classList.add("show");
        document.getElementById("sendButton").style.display = "block";
        document.getElementById("sendingStatus1").style.display = "none";
    })
    .catch(function(error) {
        document.getElementById("sendmessage").classList.remove("show");
        console.error("Error adding document: ", error);
        document.getElementById("sendmessage").innerHTML = error;        
    });
}


//subscribe form
const subscribeForm = document.getElementById("subscribe");
// console.log(subscribeForm);
subscribe.addEventListener("submit" , (e) => {
    e.preventDefault();
    subscriber = formValue("subscriber");
    addSubscriber(subscriber);
})

function addSubscriber(subscriber){
    db.collection("Subscriber").add({
        Email: subscriber,
    })
    .then(function(docRef) {
        document.getElementById("subscribe_err").classList.remove ("show");        
        document.getElementById("submitButton2").value = "Subscribed!!";
    })
    .catch(function(error) {
        document.getElementById("subscribe_err").classList.add ("show");        
    });
}