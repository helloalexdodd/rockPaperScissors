for (let i = 1; i > 0; i) {

    let userInput = prompt(`rock, paper, or scissors. 3,2,1...`).toLowerCase();
    let computerInput = Math.floor(Math.random() * 3) + 1;
    let userNumber;
    let computerString;
    let computerNumber;

    if (userInput === `rock`) {
        userNumber = 3
    } else if (userInput === `paper`) {
        userNumber = 2
    } else if (userInput === `scissors`) {
        userNumber = 1
    };

    if (computerInput === 3) {
        computerString = `rock`
    } else if (computerInput === 2) {
        computerString = `paper`
    } else if (computerInput === 1) {
        computerString = `scissors`
    };

    if (computerInput === userNumber) {
        alert(`The computer has chosen ${computerString}. Tie game!`)
    } else if (computerInput === 3 && userNumber === 2) {
        alert(`The computer has chosen ${computerString}. You win!`)
    } else if (computerInput === 3 && userNumber === 1) {
        alert(`The computer has chosen ${computerString}. You lose.`)
    } else if (computerInput === 1 && userNumber === 3) {
        alert(`The computer has chosen ${computerString}. You win!`)
    } else if (computerInput < userNumber) {
        alert(`The computer has chosen ${computerString}. You lose.`)
    } else if (computerInput > userNumber) {
        alert(`The computer has chosen ${computerString}. You win!`)
    } else if (userNumber === undefined) {
        alert(`${userInput} is not a valid answer`);
    };
};