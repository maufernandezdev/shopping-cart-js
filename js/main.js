/* [MRF 2022-07-03] products are created */
const Products = 
[
    {
        id:1,
        name: 'iPhone 11',
        price: '120.000',
        description: 'iphone-11',
        image: 'images/iphone-11.png',
    },
    {
        id:2,
        name: 'iPhone 12 pro',
        price: '150.000',
        description: 'iphone-12-pro',
        image: 'images/iphone-12-pro.png'
    },
    {
        id:3,
        name: 'iPhone 13 pro',
        price: '200.000',
        description: 'iphone-13-pro',
        image: 'images/iphone-13.png'
    },
]

const cart = [];

// every time a product is added the cart is updated - interaction with HTML
const updateCart = (cart) =>
{
    let cartContainer = document.querySelector('#cart');
    // Get the child element node
    let container = document.getElementById("cartContainer");
    if(container)
    {
        container.parentNode.removeChild(container);
    }
    let div = document.createElement('div');
    div.setAttribute('id','cartContainer');
    div.innerHTML += ` <h2>Carrito de compras</h2>`;
    for (const product of cart)
    {
        div.innerHTML += `
            <div class="cart-item">
                <h4>Producto: ${product.name}</h4>
                <h4>Precio por unidad: ${product.price}</h4>
                <h4>Cantidad: ${product.quantity}</h4>
            </div>
        `;
    }

    cartContainer.appendChild(div);
}

// click event is loaded to each button - events
const loadEvents = () =>
{
    let buttons = document.querySelectorAll('.button');
    for (const button of buttons) 
    {
        button.addEventListener('click', ()=>{

            let found = cart.find(element => element.id == button.id);
            if(found)
            {
                // esta en el carrito
                found.quantity++;
            }
            else
            {
                let product = Products.find(element => element.id == button.id);
                if(product)
                {
                    let newProduct = {
                        id:product.id,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        image: product.image,
                        quantity: 1
                    }
                    cart.push(newProduct);
                }
            }

            updateCart(cart);
        })
    }
}

// dynamic loading of products - interaction with HTML
const loadProducts = (Products) =>
{
    let container = document.querySelector('#container');
    for (const product of Products)
    {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.description}">
            <h3>${product.price}</h3>
            <h4>${product.name}</h4>
            <button class="button" id="${product.id}">Agregar al carrito</button>
        `;
        container.appendChild(div);
    }
    loadEvents();
}

loadProducts(Products);



