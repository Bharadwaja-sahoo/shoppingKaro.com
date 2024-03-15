function inc(){
    // console.log(cartval)
    document.getElementById("cartVal").value=Number(document.getElementById("cartVal").value)+1;
}

let one=document.getElementById("container");
// ajax-async js and xml
// texhniq to send request to backend/server.
// xmlhttpreq-broser object(to send req from browser to server)
let ajax=new XMLHttpRequest();
console.log(ajax);

// creating path to backend
ajax.open("GET","https://fakestoreapi.com/products");

// sending req
ajax.send();

// on-load(using the data in frontend)
ajax.onload=()=>{
    let data=JSON.parse(ajax.response);
//     data.forEach(element => {
//         // document.write(element.title +"<br>")
// });
display(data)
}
function display(data){
    data.forEach(element => {
       one.innerHTML += `
       <div class="prod">
            <img class="images" src=${element.image} alt="loading">
            <div class="title>
                <p style="color: #ffffff;"> ${(element.title).substring(0,20)}</p>
            </div>
            <div class="price">
                <p style="color:#ffffff;"> $ : ${element.price}</p>
            </div>
            <div>
            <p style="color:#ffffff;"> Rating : ${element.rating.rate}</p>
            </div>
            <div class="addtocart">
                <input type="button" value="Add to Cart" onclick="inc()" class="addcart">
            </div>
        </div>` 
    });
}