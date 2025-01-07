class Pokemon {
  constructor(name, type, level, hp, trainer) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.trainer = trainer;
  }
  //attack the opponent and calculates the damage
  attack(opponent) {
    let damage = this.level * 2;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 4;
    }
    console.log(
      `${this.trainer} commands ${this.name} to attack ${opponent.name}!`
    );
    opponent.receiveDamage(damage, this.name);
  }
  //receive damage from attack based on calculation of damage in attack(opponent)
  receiveDamage(damage, vs) {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
    console.log(
      `${this.name} received ${damage} damage from ${vs}! Remaining HP: ${this.hp}`
    );
  }
  //heal the user based on calculation and sets the defense in powerup
  heal() {
    let healAmount = Math.round(this.hp / 5);
    this.hp += healAmount;
    console.log(
      `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.`
    );
    this.powerup(0);
  }
  //contains powerup such as def
  powerup(def) {
    this.def = def;
  }
}

class Trainer {
  constructor(name, pokemons) {
    this.name = name;
    this.pokemons = pokemons;
  }
}
//Pokemon with elements have different attacks with different calculation
class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Electric", level, hp, trainer);
  }
  attack(opponent) {
    console.log(`${this.name} uses Thunderbolt on ${opponent.name}`);
    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 10);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Electric Terrain.`
      );
    } else {
      console.log(
        `${this.name} will block the next move using Electric Terrain.`
      );
    }
    this.powerup(1);
  }
  powerup(def) {
    this.def = def;
  }
}

class FirePokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Fire", level, hp, trainer);
  }
  attack(opponent) {
    console.log(`${this.name} uses Fire Blast on ${opponent.name}`);
    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 10);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Flame Body.`
      );
    } else {
      console.log(`${this.name} will block the next move using Flame Body.`);
    }
    this.powerup(1);
  }
  powerup(def) {
    this.def = def;
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Water", level, hp, trainer);
  }
  attack(opponent) {
    console.log(`${this.name} uses Water Gun on ${opponent.name}`);
    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 10);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Aqua Ring.`
      );
    } else {
      console.log(`${this.name} will block the next move using Aqua Ring.`);
    }
    this.powerup(1);
  }
  powerup(def) {
    this.def = def;
  }
}

class DragonPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Dragon", level, hp, trainer);
  }
  attack(opponent) {
    console.log(`${this.name} uses Dragon Breath on ${opponent.name}`);
    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 10);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Protect.`
      );
    } else {
      console.log(`${this.name} will block the next move using Protect.`);
    }
    this.powerup(1);
  }
  powerup(def) {
    this.def = def;
  }
}
//declares the trainer and corresponding pokemons that they have
let ash = new Trainer("Ash", [
  new ElectricPokemon("Pikachu", 10, 200, "Ash"),
  new FirePokemon("Charizard", 10, 200, "Ash"),
]);
let gary = new Trainer("Gary", [
  new WaterPokemon("Blastoise", 5, 100, "Gary"),
  new Pokemon("Eevee", "Normal", 5, 100, "Gary"),
]);
let lance = new Trainer("Lance", [
  new DragonPokemon("Gyarados", 6, 120, "Lance"),
  new DragonPokemon("Dragonite", 6, 120, "Lance"),
]);
let blaine = new Trainer("Blaine", [
  new FirePokemon("Ninetales", 5, 100, "Blaine"),
  new FirePokemon("Magmar", 5, 100, "Blaine"),
]);
let wallace = new Trainer("Wallace", [
  new WaterPokemon("Seaking", 6, 120, "Wallace"),
  new WaterPokemon("Milotic", 6, 120, "Wallace"),
]);
//class Battle is responsible for the individual pokemon battles, the class is also called in the class Tournament
class Battle {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  startBattle() {
    console.log(`${this.pokemon1.name} vs ${this.pokemon2.name}`);
    //each pokemon has a limit of 1 potion
    let potioncount = 1;
    let potioncount2 = 1;

    while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
      /*heal is rng-based, if rngheal is set as 0 it will heal the pokemon as long as there are sufficient potion
      and pokemon hp is not 0.*/
      let rngheal = Math.floor(Math.random() * 2);
      let rngheal2 = Math.floor(Math.random() * 2);

      if (rngheal == 0 && potioncount == 1 && this.pokemon1.hp != 0) {
        this.pokemon1.heal();
        potioncount = 0;
      } else {
        //if def value is 1, the pokemon will block the next attack
        if (this.pokemon2.def == 1) {
          this.pokemon2.def = 0;
          console.log(`${this.pokemon2.name} blocked the attack!`);
        } else {
          this.pokemon1.attack(this.pokemon2);
        }
      }
      //pokemon will faint and be out of the battle, if hp is 0
      if (this.pokemon2.hp <= 0) {
        console.log(
          `${this.pokemon2.name} fainted! ${this.pokemon1.name} wins!`
        );
        return this.pokemon1;
      }
      if (rngheal2 == 0 && potioncount2 == 1 && this.pokemon2.hp != 0) {
        this.pokemon2.heal();
        potioncount2 = 0;
      } else {
        if (this.pokemon1.def == 1) {
          this.pokemon1.def = 0;
          console.log(`${this.pokemon1.name} blocked the attack!`);
        } else {
          this.pokemon2.attack(this.pokemon1);
        }
      }
      if (this.pokemon1.hp <= 0) {
        console.log(
          `${this.pokemon1.name} fainted! ${this.pokemon2.name} wins!`
        );
        return this.pokemon2;
      }
    }
  }
}

class Tournament {
  constructor(trainers) {
    this.trainers = trainers;
  }

  startTournament() {
    console.log("Ash challenges the Elite Four.");
    //labeled statement so that we can break the loop in a nested loop, for loop allows Ash to fight multiple trainers
    loop1: for (let i = 0; i < this.trainers.length; i++) {
      let trainer1 = ash;
      let trainer2 = this.trainers[i];
      let trainername = this.trainers[i - 1];
      /*i - 1 is used here to pertain the previous trainer in a loop, this be only called when i value is not 0
      if else here is used to decide what announcement will be used*/
      if (i != 0) {
        console.log(
          `Ash defeats ${trainername.name} and will continue to the tournament`
        );
        console.log(`Ash vs ${trainer2.name}`);
      } else {
        console.log(`Ash vs ${trainer2.name}`);
      }

      for (let l = 0; l < 2; l++) {
        let pokemoncnt = trainer1.pokemons[0];
        let pokemoncnt2 = trainer1.pokemons[1];
        /*pokemoncnt and pokemoncnt2 is used to determine if 
        Ash wins the challenge or loses based on the hp of his pokemons*/
        let pokemon1 = trainer1.pokemons[0];
        let pokemon2 = trainer2.pokemons[l];
        //if the first pokemon is 0 it will switch out to the 2nd pokemon
        if (pokemon1.hp == 0) {
          pokemon1 = trainer1.pokemons[1];
        }
        if (pokemon2.hp == 0) {
          pokemon1 = trainer1.pokemons[1];
        }
        let battle = new Battle(pokemon1, pokemon2);
        let winner = battle.startBattle();

        if (pokemoncnt.hp == 0 && pokemoncnt2.hp == 0) {
          console.log("Ash fails the Elite Four challenge");
          break loop1; //breaks the loop if all of Ash's pokemons fainted
        } else if (
          (pokemoncnt.hp != 0 || pokemoncnt2.hp != 0) &&
          i == 3 &&
          l == 1
        ) {
          console.log("Congratulations to Ash for defeating the Elite Four!");
          break loop1;
        }
        if (winner) {
          console.log(
            `${winner.name} continues to the next battle with ${winner.hp} HP!`
          );
        }
      }
    }
  }
}
//shuffles the final four opponents
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let participants = [gary, lance, blaine, wallace];
let shuffledTrainers = shuffle(participants);

let tournament = new Tournament(shuffledTrainers);
tournament.startTournament();