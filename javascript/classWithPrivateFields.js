class Pizza{
    crust = "Original";
    // private fields
    #sauce = "Traditional";
    #size;
    constructor(pizzaSize){
        this.#size = pizzaSize;
    }
    getCrust(){
        return $this.crust;
    }
    setCrust(crust){
        this.crust=crust;
    }
    display(){
        console.log(
            `Here's your ${this.crust} ${this.#sauce} ${this.#size} pizza`
        )
    }
}
myPizza = new Pizza("large");

myPizza.display();
console.log(myPizza.sauce);