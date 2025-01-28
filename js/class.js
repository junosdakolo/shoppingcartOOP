// Create an object class for the product to store the properties for id, name and price of the product.

class Product{
    constructor (id, name,price){
        this.id = id;
        this.name = name;
        this.pride = price;
    }
}

// Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem{
    constructor(product, quantity = 1){
        this.product = product;
        this.quantity = quantity;
    }
    // To the preceding object class, add the method to calculate the total price of the item.
    getTotalPrice(){
        return (this.price&&this.product) * this.quantity;
    }
}
// Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
class ShoppingCart{
    constructor(items=[]){
        this.items = items;
        this.cartTotal = 0;
    }
    // Get the total of items inside the cart
    totalItems(){
        // const itemTotal = this.items.reduce((a,b)=>a+b)
        let itemTotal = 0;
        this.items.forEach(item=>itemTotal =itemTotal+item.quantity);

        return itemTotal;  
    }
    // Add items to Cart

    addItem(item) {
        // Check if the item already exists in the cart
        const existingItemIndex = this.items.findIndex(i => i.product.id === item.product.id)
        // If not, add the item to the cart
        if (existingItemIndex === -1) {
            this.items.push(item);
            return;
        }
        // If the item already exists, increment its quantity
        const itemInCart = this.items[existingItemIndex];
        itemInCart.quantity += item.quantity;
        this.items[existingItemIndex] = itemInCart;
    }
    // Remove items from cart
    removeItem(itemToRemove){
        const itemIndex = this.items.findIndex((item)=>item.product.id === itemToRemove.Product.id);
        if(itemIndex === -1){
            return;
        }
        if (this.items[itemIndex].quantity > 1){
            this.items[itemIndex].quantity--;
            return;
        }
        
        this.items = this.items.filter(item =>{
            return item.product.id !== itemToRemove.product.id;
        })
    }
    // Display cart items
    displayCartItems(){
        let total = 0;
        this.items.forEach(item=>{
            total += item.getTotalPrice();
        });
        this.cartTotal = total;
        document.querySelector('#total').innerText = `Total: $${total}`;
    }

}




// Go on to test the ability of our objects to:
// Create products
// Create a shopping cart
// Add items to the cart
// Display the cart
// Remove an item from the cart

