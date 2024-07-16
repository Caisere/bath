//document.getElementById("faqAns").style.display = "none";
const faqAns = document.getElementById("faqAns");
const faqAnss = document.getElementById("faqAnss");
const faqAnz = document.getElementById("faqAnz");

faqAns.style.display = "none";
faqAnss.style.display = "none";
faqAnz.style.display = "none";

document.querySelector("#showAns").addEventListener ("click", function() {
   document.getElementById("faqAns").style.display = ("block");
})

document.querySelector("#showAnss").addEventListener ("click", function() {
    document.getElementById("faqAnss").style.display = ("block");
 })

 document.querySelector("#showAnz").addEventListener ("click", function() {
    document.getElementById("faqAnz").style.display = ("block");
 })

