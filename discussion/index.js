function printName() {
  console.log("My name is Juan.");
}

printName();

let variableFunction = function () {
  console.log("Hello Again");
};

variableFunction();

function argumentFunction() {
  console.log("check");
}

function invokeFunction(argumentFunction) {
  argumentFunction();
}

invokeFunction(argumentFunction);

const person = {
  name: "Juan Dela Cruz",
  age: 25,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  },
};

person.greet();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

const person1 = new Person("Kiko", 25);
const person2 = new Person("Jun", 17);

person1.introduce();
person2.introduce();

class Car {
  constructor(model) {
    this.model = model;
  }
  start() {
    console.log(`${this.model} is starting . . .`);
  }
}
const car1 = new Car("Toyota");
car1.start();

class Pokemon {
  constructor(name, type, level, hp, trainer) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.trainer = trainer;
  }
  summon() {
    console.log(`${this.trainer} summoned ${this.name}!`);
  }
  attack(opponent) {
    let damage = this.level * 2;
    console.log(
      `${this.trainer} commands ${this.name} to attack ${opponent.name}!`
    );
    console.log(`${this.name} leveled up to ${damage}`);
  }
  receiveddamage(damage) {
    this.hp -= damage;
    console.log(
      `${this.name} received ${damage} damage! Remaining HP: ${this.hp}`
    );
  }
  heal() {
    let heal = this.hp / 2;
    console.log(
      `${this.trainer} decides to use potion to heal ${this.name} for ${heal}`
    );
  }
}

class Trainer {
  constructor(name, pokemons) {
    this.name = name;
    this.pokemons = pokemons;
  }
  description() {
    console.log(
      `${this.name} is a Pokemon Trainer having ${this.pokemons.join(", ")}`
    );
  }
}

class Battle {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  startBattle() {
    console.log(`${this.pokemon1} vs ${this.pokemon2}`);
  }
}

class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Electric", level, hp, trainer);
  }
  attack(opponent) {
    console.log(`${this.name} uses Thundebolt on ${opponent.name}`);
    let damage = this.level * 3;
    opponent.receiveddamage(damage);
  }
}

class FirePokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Fire", level, hp, trainer);
  }
  attack(opponent) {
    console.log(`${this.name} uses Fire Blast on ${opponent.name}`);
    let damage = this.level * 3;
    opponent.receiveddamage(damage);
  }
}
let ash = new Trainer("Ash", ["Pikachu", "Charmander"]);
ash.description();
let pikachu = new ElectricPokemon("Pikachu", 5, 100, ash.name);
let charmander = new FirePokemon("Charmander", 5, 100, ash.name);

pikachu.attack(charmander);
charmander.attack(pikachu);
