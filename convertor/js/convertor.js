// Ugly global variable holding the current card deck

var validate = function() {
    alert("validate");
}

var convert = function() {
    alert("convert");
    alertInputText();
}

var alertInputText = function()
{
    var val = $.trim($("#inputTextArea").val());
    if (val != "") {
        alert(val);
    }

}


$(document).ready(function () {
    alertInputText();
});

