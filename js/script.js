const plusBtn = document.getElementsByClassName("fas fa-plus-circle")
const minusBtn = document.getElementsByClassName("fas fa-minus-circle")
const trashBtn = document.getElementsByClassName("fas fa-trash-alt")
const likeBtn = document.getElementsByClassName("fas fa-heart")
const totalPrice = document.getElementsByClassName("total")
const totalClass = document.getElementsByClassName("totalClass")
const quantityPrice = document.getElementsByClassName("quantity")

// PRODUCT CLASS  
class Product {
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

}
// SHOPPING CART ITEM CLASS 
class ShoppingCartItem {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  // METHOD TO CALCULATE THE TOTAL PRICE OF THE ITEM
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}
