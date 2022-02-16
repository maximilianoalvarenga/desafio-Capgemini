const verifyPassword = require('../req02');

const password1 = verifyPassword('');
const password2 = verifyPassword('a');
const password3 = verifyPassword('B');
const password4 = verifyPassword('1');
const password5 = verifyPassword('@');
const password6 = verifyPassword('aB');
const password7 = verifyPassword('a1');
const password8 = verifyPassword('a@');
const password9 = verifyPassword('aB1');
const password10 = verifyPassword('aB1@');
const password11 = verifyPassword('aB1asad');
const password12 = verifyPassword('Ya3&ab');


test('Check password1', () => {
  expect(password1).toBe(6);
});

test('Check password2', () => {
  expect(password2).toBe(5);
});

test('Check password3', () => {
  expect(password3).toBe(5);
});

test('Check password4', () => {
  expect(password4).toBe(5);
});

test('Check password5', () => {
  expect(password5).toBe(5);
});

test('Check password6', () => {
  expect(password6).toBe(4);
});

test('Check password7', () => {
  expect(password7).toBe(4);
});

test('Check password8', () => {
  expect(password8).toBe(4);
});

test('Check password9', () => {
  expect(password9).toBe(3);
});

test('Check password10', () => {
  expect(password10).toBe(2);
});

test('Check password11', () => {
  expect(password11).toBe(1);
});

test('Check password12', () => {
  expect(password12).toBe(0);
});