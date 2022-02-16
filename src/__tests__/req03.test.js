const anagrama = require('../services/req03');

const ovo = anagrama('ovo');
const vovo = anagrama('vovo');
const ifailuhkqq = anagrama('ifailuhkqq');
const leviatan = anagrama('leviatan');

describe('Check the number of anagrams for', () => {
    test('ovo', () => {
        expect(ovo).toBe(2);
    });

    test('ifailuhkqq', () => {
        expect(ifailuhkqq).toBe(3);
    });
    
    test('vovo', () => {
        expect(vovo).toBe(4);
    });

    test('leviatan', () => {
        expect(leviatan).toBe(1);
    });
})



