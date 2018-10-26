"use strict";
// Yes
var myString = 1;
// No!!!
var myString2 = 'Code One';
function orderByName(a) {
    var result = a.slice(0);
    if (result.length === 0) {
        console.log();
    }
    else {
        return 'string';
    }
    return result.sort(function (x, y) { return x.name.localeCompare(y.name); });
}
var mary = { name: 'Mary', age: 20 };
var john = { name: 'John', age: 21, phone: '34533545' };
orderByName([mary, john]);
