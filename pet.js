const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

// Effects of growing up:
const INCREASED_HUNGER = 5;
const DECREASED_FITNESS = 3;

// Effect of walking
const INCREASED_FITNESS = 4;

// Effect of feeding
const DECREASED_HUNGER = 3;
const WALK_TRIGGER = 4;
const FEED_TRIGGER = 4;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age++
    this.hunger += INCREASED_HUNGER;
    this.fitness -= DECREASED_FITNESS;
}

Pet.prototype.walk = function() {
    this.fitness += INCREASED_FITNESS;
    if (this.fitness > MAXIMUM_FITNESS) this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.feed = function() {
    this.hunger -= DECREASED_HUNGER;
    if (this.hunger < MINIMUM_HUNGER) this.hunger = MINIMUM_HUNGER;

}

Pet.prototype.checkUp = function() {
    if (this.fitness < WALK_TRIGGER && this.hunger > FEED_TRIGGER) {
        return "I am hungry AND I need a walk";
    } else if (this.fitness < WALK_TRIGGER) {
        return "I need a walk";
    } else if (this.hunger > FEED_TRIGGER) {
        return "I am hungry";
    } else {
        return "I feel great!";
    }
}


module.exports = {
    Pet
};