// have to make blocks with time, text box, and button to save local storage

var timeBlocksContEl = $('.container');
var currentDay = $('#currentDay');
var hiddenBlocks = $('.hidden-blocks');

hiddenBlocks.hide();



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




