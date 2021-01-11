const {
    Pet
} = require("./pet.js");

describe("Runs tests on a JavaScript virtual pet", () => {

    it("checks that an instance of an object is created", () => {
        expect(new Pet('Fido')).toBeInstanceOf(Pet);
    });

});