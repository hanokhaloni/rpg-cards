var card = 
{
    "count": 1,
    "color": "black",
    "title": "title",
    "icon": "white-book-1",
    "icon_back": "robe",
    "contents": [
        "text | Text entry"
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

function validate() {
    var data = getDataFromInputField();
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

function convert(data) {
    console.log("starting Convert...");
    var data = getDataFromInputField();
    var cards = processData(data);
    $("#ouputTextArea").val(JSON.stringify(cards, null, '\t'));
    console.log("Convert done");
}

function downloadJson() {
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


function alertInputText()
{
    var val = getDataFromInputField();
    if (val != "") {
        alert(val);
    }

}

function getDataFromInputField() {
    return $.trim($("#inputTextArea").val());
}

function getDataFromOuputField() {
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

