const {
    Pet
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

    it("increments hunger by 5", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        expect(fido.hunger).toBe(5);
    });

    it("decrements fitness by 3", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        expect(fido.fitness).toBe(10-3);
    });

});

describe("walk", () => {
    it("increments the pet's fitness by 4 every walk", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        fido.growUp();
        fido.walk();
        expect(fido.fitness).toBe(10-3-3+4);
    });

    it("increments the pet's fitness to a max of 10", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        fido.walk();
        expect(fido.fitness).toBe(10);
        fido.growUp();
        fido.growUp();
        fido.growUp();
        fido.walk();
        fido.walk();
        fido.walk();
        expect(fido.fitness).toBe(10);
    });
  
});

describe("feed", () => {
    it("decrements the pet's hunger by 3 every feed", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        fido.growUp();
        fido.feed();
        expect(fido.hunger).toBe(7);
    });

    it("decrements the pet's hunger to a minimum of 0", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        fido.feed();
        fido.feed();
        expect(fido.hunger).toBe(0);
    });
});

describe("checkUp()", () => {
    it("returns I need a walk where fitness < 4", () => {
        const fido = new Pet("Fido");
        fido.fitness = 2;
        fido.hunger = 4;
        expect(fido.checkUp()).toBe("I need a walk");
    });

    it("returns I hungry where fitness > 4", () => {
        const fido = new Pet("Fido");
        fido.fitness = 4;
        fido.hunger = 6;
        expect(fido.checkUp()).toBe("I am hungry");
    });

    it("returns I am hungry AND I need a walk where fitness < 4 and hunger > 4", () => {
        const fido = new Pet("Fido");
        fido.fitness = 2;
        fido.hunger = 6;
        expect(fido.checkUp()).toBe("I am hungry AND I need a walk");
    });

    it("returns I feel great when not hungry and not unfit", () => {
        const fido = new Pet("Fido");
        fido.fitness = 4;
        fido.hunger = 4;
        expect(fido.checkUp()).toBe("I feel great!");
    });
});

