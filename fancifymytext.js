// Get the textarea element by its ID
var textArea = document.getElementById("text-area");

// Get the "Bigger" button by its ID
var biggerButton = document.getElementById("bigger-button");

// Get the "FancyShmancy" and "BoringBetty" radio buttons by their IDs
var fancyRadio = document.getElementById("fancy-radio");
var boringRadio = document.getElementById("boring-radio");

// Get the "Moo" button by its ID
var mooButton = document.getElementById("moo-button");

// Define a function to make the text bigger
function makeTextBigger() {
  textArea.style.fontSize = "24pt";
}

// Define a function to make the text fancy
function makeTextFancy() {
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
  textArea.style.fontWeight = "bold";
}

// Define a function to make the text boring
function makeTextBoring() {
  textArea.style.color = "";
  textArea.style.textDecoration = "";
  textArea.style.fontWeight = "";
}

// Define a function to make the text "Moo"
function makeTextMoo() {
  var text = textArea.value;
  var sentences = text.split(".");
  
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(" ");
    var lastWord = words[words.length - 1];
    words[words.length - 1] = lastWord.toUpperCase() + "-Moo";
    sentences[i] = words.join(" ");
  }
  
  textArea.value = sentences.join(".");
}

// Add an onclick event handler to the "Bigger" button
biggerButton.onclick = makeTextBigger;

// Add an onchange event handler to the "FancyShmancy" and "BoringBetty" radio buttons
fancyRadio.onchange = function() {
  if (fancyRadio.checked) {
    makeTextFancy();
  } else {
    makeTextBoring();
  }
};
boringRadio.onchange = function() {
  if (boringRadio.checked) {
    makeTextBoring();
  }
};

// Add an onclick event handler to the "Moo" button
mooButton.onclick = makeTextMoo;
