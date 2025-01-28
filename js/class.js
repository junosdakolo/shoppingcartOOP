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





    displayProducts() {
        if (!this.products.length) {
          return;
        }
    
        const wrapper = document.querySelector('.products-grid');
        if (!wrapper) {
          return;
        }
    
        const existingElements = document.querySelectorAll('.product-outer');
        existingElements.forEach(el => el.remove());
    
        this.products.forEach(product => {
          const itemIsInCart = this.itemIsInCart(product.id);
    
          const productCard = document.createElement('section');
          productCard.setAttribute('id', product.id);
          productCard.setAttribute('class', 'product-outer');
    
          productCard.innerHTML = `
            <div class="product">
              <img class="w-full h-[200px] object-contain" src="https://res.cloudinary.com/dk07kf3yl/image/upload/c_thumb,w_200,g_face/v1733673243/temp/item-placeholder_pr2sx5.webp" alt="">
              <div class="bg-gray-100 p-3">
                <div class="flex justify-between h-[50px]">
                  <div>${product.name}</div>
                  <div>$${product.price}</div>
                </div>
                <div class="mt-3">
                  <button class="bg-gray-700 text-white text-xs p-2 rounded">
                    ${itemIsInCart ? 'Remove From Cart' : 'Add To Cart'}
                  </button>
                </div>
              </div>
            </div>
          `;
    
          productCard.querySelector('button')?.addEventListener('click', (event) => {
            const button = event.currentTarget;
            const inCart = this.itemIsInCart(product.id);
            inCart ? this.removeCartItem(product.id) : this.addCartItem(product);
            button.textContent = inCart ? 'Add To Cart' : 'Remove From Cart';
          })
    
          wrapper.appendChild(productCard);
        })
      }
    
      clear() {
        this.items = [];
        this.displayProducts();
        this.displayCartTotal();
      }
    
}




// Go on to test the ability of our objects to:
// Create products
// Create a shopping cart
// Add items to the cart
// Display the cart
// Remove an item from the cart

