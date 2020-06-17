/*var multi: Array<any> = [1,2,3,4,5,6,7,8,9,10];
//var text: Array<string> = ["X1","X2","X3","X4","X5","X6","X7","X8","X9","X10"];

for (let i of multi)
{
  var erg = (i * 1);
  var num = (i);

    /*for (let i of text)
    {
        var tex = (i);
    }*/
//console.log(num + tex + )
/*function logMulty(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}*/
var myName = "Kathrin Schey";
function show(data) {
    return myName;
}
document.getElementById("result").innerHTML += show();
for (var i = 0; i <= 10; i++) {
    document.getElementById("result2").innerHTML += show() + "<br>";
}
var nameArray = ["Kathrin", "Schey"];
for (var i = 0; i <= 10; i++) {
    document.getElementById("result3").innerHTML += nameArray[0] + "<br>";
}
var basicThree = ["mann", "frau", "schweindi", "manuela", "diesUndDas"];
for (var i in basicThree) {
    document.getElementById("result4").innerHTML += basicThree + "<br>";
    document.getElementById("result4").innerHTML += "<hr>";
}
for (var _i = 0, basicThree_1 = basicThree; _i < basicThree_1.length; _i++) {
    var i = basicThree_1[_i];
    document.getElementById("result4").innerHTML += basicThree + "<br>";
    document.getElementById("result4").innerHTML += "<hr>";
}
/*for (let i of basicThree && i in basicThree)
{
    document.getElementById("result4").innerHTML += basicThree + "<br>";
    document.getElementById("result4").innerHTML += "<hr>";
}*/
for (var _a = 0, _b = basicThree.map(function (value, index) { return ({ index: index, value: value }); }); _a < _b.length; _a++) {
    var _c = _b[_a], index = _c.index, value = _c.value;
    document.getElementById("result4").innerHTML += index + value;
    /*console.log(index); // 0, 1, 2
    console.log(value); // 9, 2, 5*/
}
