const terrain = require("./terrains");
const dice = require("./dice");
const diceMessage = require("./dice");
const character = require("./characters");

let terrainChosen;

console.log(`${character.player1.name}'s HP: ${character.player1.health}`);
console.log(`${character.player2.name}'s HP: ${character.player2.health}`);

console.log("-------------------");

function startBattle(character1, character2) {
    for (let round = 1; round <= 5; round++) {

        console.log("Round " + round);

        terrainChosen = terrain.chooseTerrain();
        console.log(terrainChosen);
    
        let player1Dice = dice.rollDice();
        let player2Dice = dice.rollDice();

        diceMessage.rollDiceMessage(character1.name, player1Dice, character1.dexterity);
        diceMessage.rollDiceMessage(character2.name, player2Dice, character2.dexterity);

        if (terrainChosen === "Open Terrain") {
            
            let player1Result = player1Dice + character1.dexterity;
            let player2Result = player2Dice + character2.dexterity;
            
            if (player1Result > player2Result) {
                console.log(`${character1.name} attacks first!`);
                character1.attack(character2);

                // ensuring that health is not less than zero
                if (character2.health < 0) {
                    character2.health = 0;
                } 

                console.log(`${character1.name} dealt ${character1.strength} damage to ${character2.name}!`);
                console.log(`${character2.name}'s HP: ${character2.health}`);
            
            } else if (player2Result > player1Result) {
                console.log(`${character2.race} attacks first!`);
                character2.attack(character1);

                // ensuring that health is not less than zero
                if (character1.health < 0) {
                    character1.health = 0;
                }

                console.log(`${character2.name} dealt ${character2.strength} damage to ${character1.name}!`);
                console.log(`${character1.name}'s HP: ${character1.health}`);
            } 

        } else if (terrainChosen === "Obstacle") {

            let player1Result = player1Dice + character1.strength;
            let player2Result = player2Dice + character2.strength;
    
            if (player1Result > player2Result) {
                console.log(`${character1.name} attacks first!`);
                character1.attack(character2);

                // ensuring that health is not less than zero
                if (character2.health < 0) {
                    character2.health = 0;
                } 

                console.log(`${character1.name} dealt ${character1.strength} damage to ${character2.name}!`);
                console.log(`${character2.name}'s HP: ${character2.health}`);
            
            } else if (player2Result > player1Result) {
                console.log(`${character2.race} attacks first!`);
                character2.attack(character1);

                // ensuring that health is not less than zero
                if (character1.health < 0) {
                    character1.health = 0;
                }

                console.log(`${character2.name} dealt ${character2.strength} damage to ${character1.name}!`);
                console.log(`${character1.name}'s HP: ${character1.health}`);
            } 
        }

        console.log("-------------------");
    }
    
    if (character1.health > character2.health && character1.health > 0) {
        console.log(`${character1.name}' HP: ${character1.health}. The character remains alive!`);
    } else if (character2.health > character1.health && character2.health > 0) {
        console.log(`${character2.name}' HP: ${character2.health}. The character remains alive!`);
    } else if (character1.health === character2.health) {
        if (character1.health < 0 && character2.health < 0) {
            console.log("BOTH ARE DEAD");
        } 
        console.log(`${character1.name}' HP: ${character1.health}`);
        console.log(`${character2.name}' HP: ${character2.health}`);
        console.log(`The battle ends! Both ${character1.name} and ${character2.name} remains alive!`);
    }
}

startBattle(character.player1, character.player2);

module.exports = {
    startBattle,
}