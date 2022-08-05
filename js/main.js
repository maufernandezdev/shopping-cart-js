const Products = [];
const getProducts = async () =>
{
    try
    {
        const response = await fetch("/data.json");
        const data = await response.json();
        console.log("data from json: " , data);
        loadProducts(data); // Products and events are loaded on the initial load of the page
        Products.push(...data); // Save products to a local array
    }
    catch(error)
    {
        console.log(error);
    }
}

getProducts();

// fetch with anonymous asynchronous function
// (async()=>{
//     try
//     {
//         const response = await fetch("/data.json");
//         const data = await response.json();
//         console.log("data from json: " , data);
//         loadProducts(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// })();

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

const loadUser = () =>
{
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('user desde index: ',user);
    let userContainer = document.getElementById('username');
    let label = document.createElement("label");
    label.innerText = ` usuario: ${user.username} `;
    userContainer.appendChild(label);
}

loadUser(); // Uploading the username to the site



