let dishes : Array<string>=['chicken pita', 'ceasar salad', 'spaghetti', 'lamb chops'];

const [itemOne, itemTwo, itemThree, itemFour]= dishes;

for (let i=0; i<dishes.length; i++){
    var newdiv = document.createElement("p");

    var textnode = document.createTextNode(dishes[i]);
    newdiv.appendChild(textnode);

    document.body.appendChild(newdiv);
}

/* 
function newItem(): void{
    let new_item = (<HTMLInputElement>document.getElementById('new-item')).value;

    var newdiv = document.createElement("p");

    var text = document.createTextNode(new_item);

    newdiv.appendChild(newdiv);
  

} */
/* function promotion(item: string,price: number): any {
    return "Don't miss our promotion of "+ item + " for just "+ price + " Euro";
 }
 document.getElementById('target').innerHTML=promotion(itemThree,1); */