const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age++
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function() {
    this.fitness += 4;
    if (this.fitness > MAXIMUM_FITNESS) this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.feed = function() {
    this.hunger -= 3;
    if (this.hunger < MINIMUM_HUNGER) this.hunger = MINIMUM_HUNGER;
    
}

module.exports = {
    Pet
};