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

const DEATH_TRIGGER = {
    fitness: 0, // fitness level of 0 or less
    hunger: 10, // hunger level of 10 or more
    age: 30 // age of 30 or more
}

const DEAD_PARROT_MSG = "is sadly pushing up the daisies :(";


function Pet(name="Matt Hancock") {
    this.name = name;
    this.age = 0;
    this.hunger = START_HUNGER;
    this.fitness = START_FITNESS;
}

Pet.prototype = {
    get isAlive() {
        return this.age < DEATH_TRIGGER.age && this.hunger < DEATH_TRIGGER.hunger && this.fitness > DEATH_TRIGGER.fitness;
    }
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error(`${this.name} ${DEAD_PARROT_MSG}`);
    }
    this.age += 1;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_DECREMENT;
}

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error(`${this.name} ${DEAD_PARROT_MSG}`);
    }
    this.fitness += FITNESS_INCREMENT;
    if (this.fitness > MAXIMUM_FITNESS) this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error(`${this.name} ${DEAD_PARROT_MSG}`);
    }
    this.hunger -= HUNGER_DECREMENT;
    if (this.hunger < MINIMUM_HUNGER) this.hunger = MINIMUM_HUNGER;

}

Pet.prototype.checkUp = function() {
    if (!this.isAlive) return `${this.name} ${DEAD_PARROT_MSG}`
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
    FEED_TRIGGER,
    DEATH_TRIGGER,
    DEAD_PARROT_MSG
};