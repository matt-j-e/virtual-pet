const {
    Pet
} = require("./pet.js");

describe("Checks on object setup", () => {

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

    it("decrements hungefitness by 3", () => {
        const fido = new Pet("Fido");
        fido.growUp();
        expect(fido.fitness).toBe(10-3);
    });

});

