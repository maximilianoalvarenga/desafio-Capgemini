
const transformToVector= (word) => {
    const wordSplit = [];
    let letter = '';

    for (let indexWord = 0; indexWord < word.length; indexWord++) {
        if (indexWord === 0) {
            letter = word[indexWord];
        } else {
            letter += word[indexWord];
            wordSplit.push(letter);
        }
    }
    return wordSplit;
};

const invertVector = (word) => {
    const inverseVector = [];
    for (let indexInverse = word.length - 1;indexInverse > 0; indexInverse--) {
        let letter = ''
        letter = word[indexInverse];
        inverseVector.push(letter)
        for (let indexInverse2 = indexInverse - 1; indexInverse2 > 0; indexInverse2--) {
            letter += word[indexInverse2];
            inverseVector.push(letter);
        }
    }
    return inverseVector;
}

const findCharacterPairs = (word) => {
    let sum = 0;
    for (let index = 0; index < word.length; index++) {
        for (let indexInverse = word.length -1; indexInverse > index; indexInverse--) {
            if (word[index] === word[indexInverse]){
                sum += 1;
            }
        }
    }
    return sum;
}

const sortVectors = (vector) => {
    const orderedVector = [];
    let adjustedIndex = '';
    for (let indice = 0; indice < vector.length; indice++) {
        adjustedIndex = [...vector[indice]].sort().join('');
        orderedVector.push(adjustedIndex);
    }
    return orderedVector;
}

const anagrama = ( word ) => {
    let sum = findCharacterPairs(word);
    const transformation1 = transformToVector(word);
    const transformation2 = invertVector(word);
    
    
    const vectorOneOrdered = sortVectors(transformation1);
    const vectorTwoOrdered = sortVectors(transformation2);

    for (const indexVectorOne of vectorOneOrdered) {
        for (const indexVectorTwo of vectorTwoOrdered) {
            if (indexVectorTwo === indexVectorOne) {
                sum += 1
            }
        }
    }
    return sum;
}

module.exports = anagrama;

