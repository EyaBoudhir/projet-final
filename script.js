/*/function addd(id){
    let e=document.querySelector(`#${id} span`);
    console.log(e)
    e.innerHTML++
}
function dell(id){
    let e=document.querySelector(`#${id} span`);
    console.log(e)
    e.innerHTML--
}
/*fazet login */

function login(){
    var usernameInput = document.getElementById('username');
    var numeroInput = document.getElementById('Numero');
    
    if (!isNaN(usernameInput.value)) {
        event.preventDefault();
        alert("Le nom d'utilisateur ne peut pas etre un numero.");
  
    } else if (isNaN(numeroInput.value)) {
        event.preventDefault();
        alert("Le numero de telephone doit etre un nombre.");
      
    } else {
        window.location.href="index.html";
        alert("votre compte est cree avec succes");
        

    }
}
function contact(){
    var usernameInput = document.getElementById('name');
    
    if (!isNaN(usernameInput.value)) {
        event.preventDefault();
        alert("Le nom d'utilisateur ne peut pas etre un numero.");
  
    } else {
        window.location.href="index.html";
        alert( "Votre message a été transmis avec succès. Nous prendrons contact avec vous prochainement.");
        

    }
}



function add(id){
    // jebna el prix mel html
var price=document.getElementById(id).getElementsByClassName("price")[0].innerHTML;
//na7ina dt mel prix
price = price.replace("dt","")
//jebna el lista pta3 el panier mel local storage 7attineha fi variable
var pan = localStorage.getItem("pan")
//zedn el id wel prix lel variable hatheka 
pan +=  id + "/" + price + "/"
// baddalna el list elli fel local storage bel variable el mbaddel 
localStorage.setItem("pan",pan)
console.log(price)
}

function setLocal(){
    localStorage.setItem("pan","")
}


function panier(){
    //jebna el panier mel local storage lel var el 
    var el=localStorage.getItem('pan');
    // el string raddineh array
    el = el.split('/')
   //sna3na array jdid bech nzidou fei el items as objects
    var newarr =[]
    //loop for bech nemchew fi table kamel 
    for (let i=0;i<el.length-2;i+=2)
    {
        if (thabbet(el[i],newarr)==false){ 
            let q=0; 
     for (let j=i;j<el.length-2;j+=2){
            if (el[j]==el[i]){
                q++;
            }

        }
        let obj={
            "name" : el[i],
            "price": el[i+1],
            "quantity":q,
        };
        
        
        newarr.push(obj);

    }
    
    
}
display(newarr)
}




function thabbet(s,a=[]){

for (let i=0 ;i<a.length;i++){

if (a[i].name==s)

{
    return true;
}
}
return false;
}


function display(array){

 document.write("<html> <head> <meta charset='utf-8'> <link rel='stylesheet' href='styless.css'></head><body><div class='pan'>")   
    for (el of array){    
var imgsrc = "./res/"+el.name+".png";
document.write(
    `<div class="prd" class=${el.name}><img src=${imgsrc}> <p class="Prname">${el.name}</p> <p class="price">${el.price} </p><div class="counter"><div class="counterBtn" onclick="min(${el.name})">-</div> <p id="${el.name}" class="quantity">${el.quantity}</p> <div class="counterBtn" onclick="plus(${el.name})">+</div></div></div>`
    )
    }
    document.write("</div> <div class='tot'>Your total is <p id='yourTotal'><p></div<script src='script.js'></script></body></html>")
total()
}


function plus(i){

    i.innerHTML++ 
    total() 
}

function min(i){
  
    i.innerHTML--
    total()
}

function total(){
    var p= document.getElementsByClassName("prd");
    let t=0;
    for (e of p){
       var price = e.getElementsByClassName("price")[0].innerHTML;
       price = parseInt(price.replace('DT',''))
       var quantity= e.getElementsByClassName('quantity')[0].innerHTML;
       quantity=parseInt(quantity)
        t+=price*quantity
    }

    document.getElementById("yourTotal").innerHTML=t +" DT"
    
}