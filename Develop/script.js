// have to make blocks with time, text box, and button to save local storage

var timeBlocksContEl = $('.container');
var currentDay = $('#currentDay');
var hiddenBlocks = $('.hidden-blocks');

hiddenBlocks.hide();

var div = timeBlocksContEl.append(div);
var row = div.append(div);
row.addClass("row");
var hourBlock = row.append(div);
hourBlock.addClass("hour");
var past = row.append(div);
past.addClass("past");
var tense = past.append(textarea);
var btnBlock = 
var button = row.append(button);
button.addClass("saveBtn");


function createBlocks() {
    var hour;
    
    for (var i = 9; i < 18; i++) {
        if (9 < i <= 12) {
            hour = i;
        }
        else {
            hour = i - 12;
        }

    }
}






currentDay.append(moment().format("MMMM Do YYYY"));




