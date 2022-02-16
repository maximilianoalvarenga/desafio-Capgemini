const validateNumber = (password) => {
    const numbers =
    [0, '0', 1, '1', 2, '2', 3, '3', 4, '4',
        5, '5', 6, '6', 7, '7', 8, '8', 9, '9'];
    let sum = 0;
    for (const iterator of numbers) {
        for (const iterator2 of password) {
            if (iterator2 === iterator) {
                sum += 1;
            }
        }
    }

    if (sum > 0) {
        return 0;
    }
    return 1;
}

const validateLowerCase = (password) => {
    /**
     * Function to check the existence of at least one lowercase character in
     * the password,removing it, thus reducing the word size.
    */
    const lowerCharacters = password.length - password.replace(/[a-z]/g, '').length;
    if (lowerCharacters > 0) {
        return 0;
    }
    return 1;
}

const validateUpperCase = (password) => {
    /**
     * Function to check the existence of at least one uppercase character in
     * the password,removing it, thus reducing the word size.
    */
    const upperCharacters = password.length - password.replace(/[A-Z]/g, '').length;
    if (upperCharacters > 0) {
        return 0;
    }
    return 1;
}

const validateCharacterSpecial = (password) => {
    const characterSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
    let sum = 0;

    for (let index1 = 0; index1 < characterSpecial.length; index1++) {
        for (let index2 = 0; index2 < password.length; index2++) {
            if (password[index2] === characterSpecial[index1]) {
                sum += 1;
            }
        }
    }
    if (sum > 0) {
        return 0;
    }
    return 1;
}

const validatePassword = (password) => {
    const SIZE_PASSWORD = 6;

    const qtdNumbers = validateNumber(password);
    const qtdLowerCase = validateLowerCase(password);
    const qtdUpperCase = validateUpperCase(password);
    const qtdCharacterSpecial = validateCharacterSpecial(password);
    const sum = qtdNumbers+qtdCharacterSpecial+qtdLowerCase+qtdUpperCase;
    
    if (password.length >= SIZE_PASSWORD && sum > 0) {
        return sum;
    }
    
    if (password.length < SIZE_PASSWORD) {
        return SIZE_PASSWORD - password.length;
    }

    return 0;
}

module.exports = validatePassword;
