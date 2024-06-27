function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDiceMessage(character, diceNumber, attribute) {
    console.log(`The character ${character} rolled the dice and got ${diceNumber}! \nDexterity = ${attribute} + ${diceNumber} = ${attribute + diceNumber}`);
}

module.exports = {
    rollDice,
    rollDiceMessage,
}