const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'dsadasdas',
            name: 'Dimo',
            descriptors: "Strange cube",
            imageUrl: 'wqe',
            difficulty: '4'
          }
    ];

    constructor(name, descriptors, imageUrl, difficulty) {
        this.id = uniqid();
        this.name,
        this.descriptors,
        this.imageUrl,
        this.difficulty
    }

    static get cubes() {
return Cube.#cubes.slice();
    }
    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;