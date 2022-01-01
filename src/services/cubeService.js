const Cube = require('../models/Cube');

const getAll = () => Cube.cubes;

const create = (name, descriptors, imageUrl, difficulty) => {
let cube = new Cube(name, descriptors, imageUrl, difficulty);

Cube.add(cube);
}

const cubeService = {
    getAll,
    create 
};

module.exports = cubeService;