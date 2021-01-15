// Pet's birth values
const START_HUNGER = 0;
const START_FITNESS = 10;

// Max / min settings
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

// Effects of growing up:
const HUNGER_INCREMENT = 5;
const FITNESS_DECREMENT = 3;

// Effect of walking
const FITNESS_INCREMENT = 4;

// Effect of feeding
const HUNGER_DECREMENT = 3;

// Fitness level below which a walk is required
const WALK_TRIGGER = 4;

// Hunger level above which a feed is required
const FEED_TRIGGER = 4;


function Pet(name="Fido") {
    this.name = name;
    this.age = 0;
    this.hunger = START_HUNGER;
    this.fitness = START_FITNESS;
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    this.age++
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_DECREMENT;
}

Pet.prototype.walk = function() {
    this.fitness += FITNESS_INCREMENT;
    if (this.fitness > MAXIMUM_FITNESS) this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.feed = function() {
    this.hunger -= HUNGER_DECREMENT;
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
    Pet,
    START_HUNGER,
    START_FITNESS,
    MAXIMUM_FITNESS,
    MINIMUM_HUNGER,
    HUNGER_INCREMENT,
    HUNGER_DECREMENT,
    FITNESS_INCREMENT,
    FITNESS_DECREMENT,
    WALK_TRIGGER,
    FEED_TRIGGER
};