// scroll header effect
window.onscroll = function() {
    myFunction()
};

var content = document.getElementById("content");
// var sticky = content.offsetTop;

function myFunction() {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 455) {
        document.querySelector('header').style.backgroundColor="#9696969f"; 
        document.getElementById('order-btn').style.color="#000";
        document.getElementsByClassName("abc")[0].style.color="#000";
        document.getElementsByClassName("abc")[1].style.color="#000";

        document.getElementById('mobnav-h3').style.color="#000";
        document.getElementsByClassName("mobnav-li")[0].style.borderBottom = "1px solid #000";
        document.getElementsByClassName("mobnav-li")[1].style.borderBottom = "1px solid #000";
        document.getElementsByClassName("mobnav-li")[2].style.borderBottom = "1px solid #000";

        document.getElementsByClassName("mobnav-li-a")[0].style.color="#000";
        document.getElementsByClassName("mobnav-li-a")[1].style.color="#000";
        document.getElementsByClassName("mobnav-li-a")[2].style.color="#000";
    } else {
        document.querySelector('header').style.backgroundColor="transparent";
        document.getElementById('order-btn').style.color="#fff";
        document.getElementsByClassName("abc")[0].style.color="#fff";
        document.getElementsByClassName("abc")[1].style.color="#fff";

        document.getElementById('mobnav-h3').style.color="#fff";
        document.getElementsByClassName("mobnav-li")[0].style.borderBottom = "1px solid #fff";
        document.getElementsByClassName("mobnav-li")[1].style.borderBottom = "1px solid #fff";
        document.getElementsByClassName("mobnav-li")[2].style.borderBottom = "1px solid #fff";

        document.getElementsByClassName("mobnav-li-a")[0].style.color="#fff";
        document.getElementsByClassName("mobnav-li-a")[1].style.color="#fff";
        document.getElementsByClassName("mobnav-li-a")[2].style.color="#fff";
    }
}