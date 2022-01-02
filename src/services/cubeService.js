const Cube = require('../models/Cube');

const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, descriptors, imageUrl, difficulty) => {
    let cube = new Cube(name, descriptors, imageUrl, difficulty);

    Cube.add(cube);
};

const search = (text, from, to) => {
    let results = Cube.cubes;

    if (text) {
        results = results.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))
    }

    if (from) {
        results = results.filter(x => x.difficulty >= from);
    }

    if (to) {
        results = results.filter(x => x.difficulty <= to);
    }

    return results;
};


const cubeService = {
    getAll,
    create,
    getOne,
    search
};

module.exports = cubeService;