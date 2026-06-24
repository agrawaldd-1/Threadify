document.getElementById("search-bar").addEventListener("click", () => {
    document.querySelector(".search-opt").classList.toggle("show")
})


// Men
const products = [

    // Men
    "Mens Tshirt",
    "Mens Shirt",
    "Mens Jacket",
    "Mens Hoodie",
    "Mens Jeans",
    "Mens Shoes",


// Women

    "Womens Dress",
    "Womens Top",
    "Womens Blazer",
    "Womens Jeans",
    "Womens Handbag",


// Kids
    "Kids Wear",

// Accessories

    "Watch",
    "Backpack",
    "Sunglasses",
    "Wallet",

    "Sneakers",
    "Boots",
    "Sandals"
];

document.getElementById("search-bar").addEventListener("keyup", () => {

    document.querySelector(".search-opt").innerHTML = "";

    let search = document.getElementById("search-bar").value.toLowerCase();

    for(const product of products){

        let word = product.toLowerCase();

        if(word.includes(search)){

            let div = document.createElement("div");

            div.innerHTML = product;

            document.querySelector(".search-opt").append(div);
        }
    }

});

document.getElementById("account-img").addEventListener("click" , ()=>{
    document.querySelector(".account-slide").classList.toggle("show2")
})

document.querySelector(".all").addEventListener("click" , ()=>{
    document.querySelector(".sidebar").classList.toggle("show3")
    document.querySelector(".close-btn").classList.toggle("show4")
})
document.querySelector(".close-btn").addEventListener("click" , ()=>{
    document.querySelector(".sidebar").classList.remove("show3")
    document.querySelector(".close-btn").classList.remove("show4")
})

let current = 0;
        document.querySelector(".next").addEventListener("click" , ()=>{
            if(current < 1){
            current++;
            document.querySelector(".track").style.transform = `translateX(-${current*50}%)`;}
            
        })
        document.querySelector(".previous").addEventListener("click" , ()=>{
            if(current == 1){
            current--;
            document.querySelector(".track").style.transform = `translateX(-${current*50}%)`;}
            
        })