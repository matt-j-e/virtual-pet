function Pet(name) {
    this.name = name;
    this.age = 0;
    // this.growUp = () => this.age++;
}

Pet.prototype.growUp = function() {
    this.age++;
}

module.exports = {
    Pet
};