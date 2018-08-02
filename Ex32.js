class Product{
constructor(price,quantity,name) {

    this.price = price
    this.quantity = quantity
    this.name = name
}
printAllAttribute(){
    console.log(this.price + "price" + this.quantity + "quantity"+ this.name + "name")
    return this
}




}

function main(){
var item1 = new Product()
}

main();