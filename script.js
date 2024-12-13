

let cart = [];


function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCartDisplay();
}


function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total');
    

    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}


function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Thank you for your order!');
    cart = [];
    updateCartDisplay();
}
