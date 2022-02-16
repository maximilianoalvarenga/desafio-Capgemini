const createLadder = require('../services/req01');

const sixSteps = createLadder(6);
const oneHundredSteps = createLadder(100);
const fiftySteps = createLadder(50);

test('Check six steps ladder', () => {
  expect(sixSteps.length).toBe(42);
});

test('Check one hundred steps ladder', () => {
  expect(oneHundredSteps.length).toBe(10100);
});

test('Check fiftySteps steps ladder', () => {
  expect(fiftySteps.length).toBe(2550);
});