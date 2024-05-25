class Pizza{
    constructor (pizzaSize){
        this.pizzaSize = pizzaSize
        this.crust = "Original";
    }
    getCrust(){
        return this.crust
    }
    setCrust(crust){
        this.crust=crust;
    }
}
class SpecialtyPizza extends Pizza{
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.pizzaSize} pizza has 8 slices`);
    }
     
}
const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();

/* || the function controls direct access to the class fields */
// function pizzaFactory(pizzaSize){
//     const crust = "original";
//     const size = pizzaSize;

//     return{
//         bake: () =>console.log(`Baking a ${size} ${crust} crust pizza`)
//     }
// }
//     const myPizza = pizzaFactory("small");
//     myPizza.bake();