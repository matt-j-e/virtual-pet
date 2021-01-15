const {
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
} = require("./pet.js");

describe("Object setup", () => {

    it("checks that an instance of an object is created", () => {
        expect(new Pet('Fido')).toBeInstanceOf(Pet);
    });

    it("checks that the correct name is returned", () => {
        const fido = new Pet('Fido');
        expect(fido.name).toBe("Fido");
    });

    it("has initial age of 0", () => {
        const fido = new Pet('Fido');
        expect(fido.age).toBe(0);
    });

    it("has initial hunger of 0", () => {
        const fido = new Pet('Fido');
        expect(fido.hunger).toBe(0);
    });

    it("has initial fitness of 10", () => {
        const fido = new Pet('Fido');
        expect(fido.fitness).toBe(10);
    })

});

describe("growUp", () => {

    it("increments the age by 1", () => {
        const fido = new Pet('Fido');
        fido.growUp();
        expect(fido.age).toBe(1);
    });

    it("increments hunger by HUNGER_INCREMENT", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        expect(fido.hunger).toBe(HUNGER_INCREMENT);
    });

    it("decrements fitness by FITNESS_DECREMENT", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        expect(fido.fitness).toBe(START_FITNESS - FITNESS_DECREMENT);
    });

});

describe("walk", () => {
    it("increments the pet's fitness by FITNESS_INCREMENT every walk", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        fido.growUp();
        fido.walk();
        expect(fido.fitness).toBe(
            START_FITNESS 
            - (2 * FITNESS_DECREMENT) 
            + FITNESS_INCREMENT
        );
    });

    it("increments the pet's fitness to a max of MAXIMUM_FITNESS", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        fido.walk();
        expect(fido.fitness).toBe(MAXIMUM_FITNESS);
        fido.growUp();
        fido.growUp();
        fido.growUp();
        fido.walk();
        fido.walk();
        fido.walk();
        expect(fido.fitness).toBe(MAXIMUM_FITNESS);
    });
  
});

describe("feed", () => {
    it("decrements the pet's hunger by HUNGER_DECREMENT every feed", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        fido.growUp();
        fido.feed();
        expect(fido.hunger).toBe(
            START_HUNGER 
            + (2 * HUNGER_INCREMENT) 
            - HUNGER_DECREMENT
        );
    });

    it("decrements the pet's hunger to a minimum of MINIMUM_HUNGER", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        fido.feed();
        fido.feed();
        expect(fido.hunger).toBe(MINIMUM_HUNGER);
    });
});

describe("checkUp()", () => {
    it("returns I need a walk where fitness < WALK_TRIGGER", () => {
        const fido = new Pet("Fido");
        fido.fitness = WALK_TRIGGER - 2;
        fido.hunger = FEED_TRIGGER - 1;
        expect(fido.checkUp()).toBe("I need a walk");
    });

    it("returns I hungry where fitness > FEED_TRIGGER", () => {
        const fido = new Pet("Fido");
        fido.fitness = WALK_TRIGGER + 1;
        fido.hunger = FEED_TRIGGER + 1;
        expect(fido.checkUp()).toBe("I am hungry");
    });

    it("returns I am hungry AND I need a walk where fitness < WALK_TRIGGER and hunger > FEED_TRIGGER", () => {
        const fido = new Pet("Fido");
        fido.fitness = WALK_TRIGGER - 1;
        fido.hunger = FEED_TRIGGER + 1;
        expect(fido.checkUp()).toBe("I am hungry AND I need a walk");
    });

    it("returns I feel great when not hungry and not unfit", () => {
        const fido = new Pet("Fido");
        fido.fitness = WALK_TRIGGER + 1;
        fido.hunger = FEED_TRIGGER - 1;
        expect(fido.checkUp()).toBe("I feel great!");
    });
});

