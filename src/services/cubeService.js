const Cube = require('../models/Cube');

const cubeDb = [{
    name: 'Dimo',
    descriptors: undefined,
    imageUrl: 'wqe',
    difficulty: '1'
  },
  {
    name: 'Ivan',
    descriptors: undefined,
    imageUrl: 'wqe',
    difficulty: '1'
  },
  {
    name: 'Marian',
    descriptors: undefined,
    imageUrl: 'wqe',
    difficulty: '1'
  }];

const getAll = () => cubeDb.slice();

const create = (name, descriptors, imageUrl, difficulty) => {
let cube = new Cube(name, descriptors, imageUrl, difficulty);
cubeDb.push(cube);
}

const cubeService = {
    getAll,
    create 
};

module.exports = cubeService;