import Animal from "./animal.js";

class rabbit extends Animal {
    constructor(name){
        super(name)
    }
    play() {
        this.boredom += 10
        this.hunger -= 10
        this.thirst -= 10
        this.hug -= 10
       
        console.log(`${this.name} is a good rabbit, a fetches the carrot`)
        return this
    }
    activity() {
        this.health += 10
        console.log(`taking ${this.name} for a walk`)
        return this
    }
}
export default rabbit