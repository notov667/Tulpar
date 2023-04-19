'use strict';


let test_input = document.getElementById('test-input');

var today = new Date();
var enddate = new Date();
enddate.setMonth(enddate.getMonth() + 6);
test_input.value = today.toLocaleDateString() + '-' + enddate.toLocaleDateString();

function halfyear(){
    today = new Date();
    enddate = new Date();
    enddate.setMonth(enddate.getMonth() + 6);
    test_input.value = today.toLocaleDateString() + '-' + enddate.toLocaleDateString();
}
function oneyear(){
    today = new Date();
    enddate = new Date();
    enddate.setMonth(enddate.getMonth() + 12);
    test_input.value = today.toLocaleDateString() + '-' + enddate.toLocaleDateString();

}