/* [MRF 2022-07-03] products are created */
// const Products = 
// [
//     {
//         id:1,
//         name: 'iPhone 11',
//         price: '120.000',
//         description: 'iphone-11',
//         image: 'images/iphone-11.png'
//     },
//     {
//         id:2,
//         name: 'iPhone 12 pro',
//         price: '150.000',
//         description: 'iphone-12-pro',
//         image: 'images/iphone-12-pro.png'
//     },
//     {
//         id:3,
//         name: 'iPhone 13 pro',
//         price: '200.000',
//         description: 'iphone-13-pro',
//         image: 'images/iphone-13.png'
//     },
// ]

const loadEvents = () =>
{
    let buttons = document.getElementsByClassName('add'); // the buttons are obtained to assign them a function on the click
    console.log(buttons); // show HTML collection
    for (const element of buttons)
    {
        element.addEventListener('click', ()=>{
            console.log(element.id); // show selected id 
            alert("se seleccionó el producto con id: " + element.id);
            // here you should add the product to the cart, based on the selected id
            // I recommend doing it using a function and sending the id of the selected product
        });
    }
}

/* [MRF 2022-07-03] Products are loaded */
const loadProducts = (prods) =>
{   
    let container = document.getElementsByClassName('container'); // the container element of the DOM is obtained and then I am going to insert the products
    
    // then I go through the array of products to create a card for each one
    for (const element of prods)
    {   
        let div = document.createElement("div"); // div creation
        div.setAttribute("class", "card"); // setting a class for my new div
        div.innerHTML = 
        ` 
            <img src="${element.image}" alt="${element.description}">
            <h3>$${element.price}</h3>
            <h4>${element.name}</h4>
            <button id="${element.id}" class='button add'>Agregar al carrito</button> 
        `;
        // It is important that the button has the id of the product to which it refers
        // this will help to later recognize it when clicked
        container[0].appendChild(div);
    }

    // once the products are loaded, the events are loaded to recognize the card
    loadEvents();
}

// loadProducts(Products); // Products and events are loaded on the initial load of the page

// fetch only 
// fetch('/data.json')
// .then((response) => response.json())
// .then((data) =>{
//     loadProducts(data);
// })

// fetch with asynchronous function
// const getProducts = async () =>
// {
//     try
//     {
//         const response = await fetch('/data.json')
//         const data = await response.json();
//         // console.log('data: ' , data);
//         loadProducts(data);
//     }
//     catch(error)
//     {   
//         console.log('error: ' , error);
//     }
// }
// getProducts();

// fetch with anonymous asynchronous function
(async ()=>{
    try
    {
        const response = await fetch('/data.json')
        const data = await response.json();
        // console.log('data: ' , data);
        loadProducts(data);
    }
    catch(error)
    {   
        console.log('error: ' , error);
    }
})();




