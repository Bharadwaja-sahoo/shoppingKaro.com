
function getElementById()
{
    let parentDiv=document.getElementById("containerDiv");
   let str=localStorage.getItem("itemsKey");
    let ar=str.split(',');
    for(i=1;i<ar.length ;i++)
    {
    let ajax1 = new XMLHttpRequest();
        ajax1.open("GET","https://fakestoreapi.com/products/${ar[i]}");
        ajax1.send();
        ajax1.onload=()=>
        {
            let element=JSON.parse(ajax1.response);
            parentDiv.innerHTML+=`<div class="containers">
            <p class="title">${(element.title)}</p>
            <img class="images" src=${element.image} alt="loading"/>.
            <div id="divInside">
            <div id="PriceAndRatingDiv">
            <p class="Rating">Rating ${element.rating}</p>
            <p class="prices">Rs : ${element.price}</p>
            </div>
            <div id="AddToCartDiv">
            <button id="AddToCartButton" onclick="buttonActivated(this)" value="${element.id}">Add To Cart</button></div>
            </div>
            </div>`
        }
    }
}
function buttonActivated(Button)
{
    let val=Button.value;
    let data=JSON.parse(ajax.response);
    data.forEach(element =>{
        if(element.id==val)
        {
            localStorage.setItem(itemsKey,localStorage.getItem(itemsKey)+","+val);
        }
    })
}