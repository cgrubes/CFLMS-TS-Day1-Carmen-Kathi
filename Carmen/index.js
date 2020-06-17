/* let array_value : Array<number> = [1,2,3,4,5,6,7,8,9,10];   */
/* for (let i=0; i<10; i++){
    
    for(let j=0; j<10; j++){
       document.getElementById("result").innerHTML+=`${i} X ${j} = ${i*j} <br>`;
    }
       document.getElementById("result").innerHTML += `<hr>`;
} */
/*   let array_value : Array<number> = [1,2,3,4,5,6,7,8,9,10];
  for (let i of array_value){
      for (let j of array_value){
          document.getElementById("result").innerHTML+=`${i} X ${j} = ${i*j} <br>`;
       }
          document.getElementById("result").innerHTML += `<hr>`;
      } */
/* console.log(array_value);

for (let i=0; i<array_value.length; i++){
    array_value[i] = array_value[i]*2;
}
console.log (array_value); */
/* for(let value of array_value){
    console.log(value * value)
}
 */
/* *****************Basic 2 ****************************/
/* let myName : Array<string> = ["Carmen", "Gruber"];
myName.forEach(function(value){
    setTimeout(function(){
    console.log(myName[1]);
},5000);

let myName : Array<string> = ["Carmen", "Gruber"];
for (let i=0; i<=10; i++){
    setTimeout(function(){
    document.write(myName[1] + "<br>");
    },5000);
} */
/* *****************Basic 3 ****************************/
var nameArray = ["John", "Beth", "Mary"];
for (var index in nameArray) {
    //document.write(index + "<br>");
    for (var _i = 0, nameArray_1 = nameArray; _i < nameArray_1.length; _i++) {
        var value = nameArray_1[_i];
        //document.write(index+ value + "<br>");
        document.getElementById("result1").innerHTML += index + value + "<br>";
    }
}
;
/* {first:f, last:l} = name;
document.write(f, l); */
