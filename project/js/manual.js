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

// Thank you plug in------------>
const myform = document.getElementById("myform");
myform.addEventListener("submit" , (e) => {
 document.getElementById("sendmessage").classList.add("show");
})
