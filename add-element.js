// create a new div element
// (edit) create a new h2 tag
const newheadertext = document.createElement("newheader");

// and give it some content
const newContent = document.createTextNode("Hi welcome to my first html/js edit!");

// add the text node to the newly created div
// (edit) add new text for header to new h2 tag
newheadertext.appendChild(newContent);

// add the newly created element and its content into the DOM
// add (edit) new h2 tag element and its content to DOM
const existingDiv = document.getElementById("my-new-head-target-element");
document.body.appendChild(newheadertext, existingDiv);