const MAXIMUM_FITNESS = 10;

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
    if (this.fitness > MAXIMUM_FITNESS) this.fitness = 10;
}

module.exports = {
    Pet
};