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

let myName : string = "Kathrin Schey";

function show<myName>(data: myName) {
	return myName; 
}

document.getElementById("result").innerHTML += show();

for (let i = 0; i <= 10; i++)
{
	document.getElementById("result2").innerHTML += show() + "<br>";

}

let nameArray : Array<string> = ["Kathrin","Schey"];

for (let i = 0; i <= 10; i++)
{
	document.getElementById("result3").innerHTML += nameArray[0] + "<br>";
}

let basicThree : Array<string> = ["mann","frau","schweindi","manuela","diesUndDas"];

for (let i in basicThree)
{
	document.getElementById("result4").innerHTML += basicThree + "<br>";
	document.getElementById("result4").innerHTML += "<hr>";
}

for (let i of basicThree)
{
	document.getElementById("result4").innerHTML += basicThree + "<br>";
	document.getElementById("result4").innerHTML += "<hr>";
}

/*for (let i of basicThree && i in basicThree)
{
	document.getElementById("result4").innerHTML += basicThree + "<br>";
	document.getElementById("result4").innerHTML += "<hr>";
}*/

for (let {index, value} of basicThree.map((value, index) => ({ index, value }))) 
{
	document.getElementById("result4").innerHTML += index + value;
    /*console.log(index); // 0, 1, 2
    console.log(value); // 9, 2, 5*/
}
