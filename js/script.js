const plusBtn = document.getElementsByClassName("fas fa-plus-circle")
const minusBtn = document.getElementsByClassName("fas fa-minus-circle")
const trashBtn = document.getElementsByClassName("fas fa-trash-alt")
const likeBtn = document.getElementsByClassName("fas fa-heart")
const totalPrice = document.getElementsByClassName("total")
const quantityPrice = document.getElementsByClassName("quantity")

class Product {
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}