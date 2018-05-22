'use strict';
let name;

const setValue = (value) => {
    name = value;
}
const getValue = () => {
    return name;
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {setValue, getValue, getRandomNumber};