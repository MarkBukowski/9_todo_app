class Suo {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    greeting() {
        const greet = `Hello, I am ${this.name} and my fur color is ${this.color}.`;
        console.log(greet);
    }

}

export { Suo }



class Cate {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    hello() {
        const text = `Labas, mano vardas ${this.name} ir mano kailis ${this.color}!`;
        console.log(text);
    }

}

export { Cate }



class Bonha {
    constructor(name, collar) {
        this.name = name;
        this.collarColor = collar;
    }
    bonhello() {
        console.log(`Au au, as vardu ${this.name} ir man patinka mano ${this.collarColor} antkaklis`);
    }
}

export { Bonha }
















