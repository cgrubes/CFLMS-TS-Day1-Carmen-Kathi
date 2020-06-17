let menu : Array<string> = ["burger","hotdog","suppe"];
let drink : Array<string> = ["coke","fanta","sprite"];
let dessert : Array<string> = ["banane","mohr im hemd","eis"];
let preis : Array<number> = [20,30,15,57];

document.getElementById("menue").innerHTML += menu;
document.getElementById("drink").innerHTML += drink;
document.getElementById("dessert").innerHTML += dessert;
document.getElementById("preis").innerHTML += preis;

function menue() {
  return ["burger","hotdog","suppe"]
}
let b, h, s;
[b, h, s] = menue();

document.getElementById("menue").innerHTML += b + h + s;