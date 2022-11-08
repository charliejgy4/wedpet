import Animal from "./animal.js";


class pig extends Animal {
    constructor(name) {
        super(name)
    }
    play() {
        this.boredom += 10
        this.hunger -= 10
        this.thirst -= 10
        this.hug -= 10
       
        console.log(`${this.name} is happy`)
        return this
    }
    activity() {
        console.log(`${this.name} is very chill right now`)
        this.health += 10
        return this
    }
}

export default pig
