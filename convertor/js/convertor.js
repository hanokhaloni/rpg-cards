var card = 
{
    "count": 1,
    "color": "black",
    "title": "title",
    "icon": "white-book-1",
    "icon_back": "robe",
    "contents": [
        "subtitle | 1st level evocation",
        "rule",
        "property | Casting time | 1 action",
        "property | Range | Self (15ft cone)",
        "property | Components | V,S",
        "rule",
        "fill | 2",
        "text | Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes <b>3d6 fire damage</b> on a failed save, or half as much damage on a successful one.",
        "text | The fire ignites any flammable objects in the area that aren't being worn or carried.",
        "fill | 3",
        "section | At higher levels",
        "text | +1d6 damage for each slot above 1st"
    ],
    "tags": [],
    fromCSV: function(values) {
        this.count = values[0];
        this.title = values[1];
        this.icon = values[2];
        this.icon_back = values[2];
        this.contents = "text |" + values[3];
        return JSON.parse(JSON.stringify(this));//TODO extract clone method
    },
    getHeader: function() {
        return [
            "count",
            "title",
            "icon",
            "contents"];

    },
}


// Ugly global variable holding the current card deck

var validate = function() {
    var lines = data.split(/\r\n|\n/);
    var headings = lines[0].split(','); // Splice up the first row to get the headings
    var expectedHeadings = card.getHeader();
    if (headings == expectedHeadings) {
        alert("Everything is OK");
    }
    else {
        alert("invalid!");
    }
    
}

var convert = function(data) {
    console.log("starting Convert...");
    var data = getDataFromInputField();
    var cards = processData(data);
    $("#ouputTextArea").val(JSON.stringify(cards, null, '\t'));
    console.log("Convert done");
}

var downloadJson = function() {
    var cards = $("#ouputTextArea").val();
    var exportName = "cards";
    var dataStr = "text/json;charset=utf-8," + encodeURIComponent(cards);

    
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.href = "data:" + dataStr;
    downloadAnchorNode.download = exportName + ".json";
    downloadAnchorNode.innerHTML = 'download JSON';

    var container = document.getElementById('downloadAnchorNode');
    //container.children.remove();
    container.appendChild(downloadAnchorNode);
}


var alertInputText = function()
{
    var val = getDataFromInputField();
    if (val != "") {
        alert(val);
    }

}

function getDataFromInputField() {
    return $.trim($("#inputTextArea").val());
}

function processData(data) {
    var lines = data.split(/\r\n|\n/);

    //Set up the data arrays
    var cards = [];

    var headings = lines[0].split(','); // Splice up the first row to get the headings

    for (var j=1; j<lines.length; j++) {
       var values = lines[j].split(','); 
       var card1 = card.fromCSV(values);
       cards.push(card1); 

    }
    console.log("Successfully proccessed " + cards.length + " cards.");
    return cards;
}




$(document).ready(function () {
    
});

