var shoppingList = [{item:'Acana Puppy Large Breed',price:605.00},
                  {item:'Rogz Snug Podz Cat Bed',price:218.75},
                  {item:'WagWorld K9 Castle',price:784.00},
                  {item:'M-Pets - Anti-Scoff Dog Food Bowl',price:86.00},
                  {item:'Rogz Side Release Collar',price:46.00},
                  {item:'Simple Sol Training Pads',price:115.00},
                  {item:'Nylabone Durachew Original Bone',price:29.00},
                  {item:'Moderna - Lift to Sift Cat Litter Tray',price:375.00},
                  {item:'Viaggio Pet Carrier(Airline Approved)',price:467.50}];

var idList = []; //list to store button id for each item added to cart
var newList = []; //to store specific items by id clicked

function reply_clicked(clicked_id){

  //alert(shoppingList[parseInt(clicked_id)].item+" - R"+shoppingList[parseInt(clicked_id)].price);
  newList.push(shoppingList[parseInt(clicked_id)]);
  var newShopSON = JSON.stringify(newList);
  localStorage.setItem("items", newShopSON);
  
}

function getItems(event){
  var gameJSON = localStorage.getItem("items");
  var izinto = JSON.parse(gameJSON);

  var sum = 0;
  for(var i=0; i<izinto.length; i++){
    document.getElementById("cartlist").innerHTML += "<input type='checkbox' onclick='removeItem(this.value)' name='vehicle'"+ "value="+i+">"+" " + izinto[i].item+"   :   R"+izinto[i].price.toFixed(2)+"<br>"
    //alert(izinto[i].item)
    sum +=izinto[i].price;
  }

  document.getElementById("cartlist").innerHTML +="<span>"+"   Total Price"+": R"+sum.toFixed(2)+"</span>"+"<br>";
  document.getElementById("cartlist").innerHTML +="<br>"+"<button id='b' onclick=''>Remove selected item</button>" +"  "+" "+"<button id='b' onclick='clean()'>Remove all items</button>";
}

function removeItem(a){
  //var gameJSON = localStorage.getItem("items");
  //var izinto = JSON.parse(gameJSON);
 // var x = document.getElementById('b');
alert(izinto[a]);
 // izinto.splice

}

function clean(event){
  //removeItem();
  localStorage.clear();
  document.getElementById("cartlist").innerHTML ="<h5>Your wish is now empty. Go back to <a href="+"products.html"+">Products</a> Page </h5>";
}

button.addEventListener("click",clicked);
button.addEventListener("click",clean);
