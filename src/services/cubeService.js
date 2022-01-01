const Cube = require('../models/Cube');

const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, descriptors, imageUrl, difficulty) => {
let cube = new Cube(name, descriptors, imageUrl, difficulty);

Cube.add(cube);
}

const cubeService = {
    getAll,
    create,
    getOne 
};

module.exports = cubeService;