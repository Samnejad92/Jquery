var txt1 = "<p>Text iwth html.</p>";               // Create element with HTML 
var txt2 = $("<p></p>").text("Text with jquery.");   // Create with jQuery
var txt3 = document.createElement("p");  // Create with DOM
txt3.innerHTML = "Text with dom.";
$("body").append(txt1, txt2, txt3);