// have to make blocks with time, text box, and button to save local storage

var timeBlocksContEl = $('.container');
var currentDay = $('#currentDay');
var hiddenBlocks = $('.hidden-blocks');

//hiddenBlocks.hide();

var div = timeBlocksContEl.append(div);
var row = div.append(div);
row.addClass("row col-12");
var hourBlock = row.append(div);
hourBlock.addClass("hour col-3");
var tenseBlock = row.append(div);
tenseBlock.addClass("past col-6");
//var tense = tenseBlock.append(p);
var btnBlock = row.append(div)
btnBlock.addClass("saveBtn col-3");
//var button = btnBlock.append(button);


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




