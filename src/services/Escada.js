const createLadder = (steps) => {
    let aux = steps;
    let phrase = '';
    let ladder = '';

    for (let line = 1; line <= steps; line++) {
        for (let column = 1; column <= steps; column++) {
            if (column < aux) {
                phrase += ' ';
            } else {
                phrase += '*';
            }
        }
        
        if (line === 1) {
            ladder = phrase + '\n';
        } else {
            ladder += phrase + '\n';
        }

        aux --;
        phrase = '';
    }

    return ladder;
}

export default createLadder;