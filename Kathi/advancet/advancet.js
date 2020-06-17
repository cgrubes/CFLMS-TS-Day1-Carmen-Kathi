var _a;
var menu = ["burger", "hotdog", "suppe"];
var drink = ["coke", "fanta", "sprite"];
var dessert = ["banane", "mohr im hemd", "eis"];
var preis = [20, 30, 15, 57];
document.getElementById("menue").innerHTML += menu;
document.getElementById("drink").innerHTML += drink;
document.getElementById("dessert").innerHTML += dessert;
document.getElementById("preis").innerHTML += preis;
function menue() {
    return ["burger", "hotdog", "suppe"];
}
var b, h, s;
_a = menue(), b = _a[0], h = _a[1], s = _a[2];
document.getElementById("menue").innerHTML += b + h + s;
