const terrain = require("./terrains");
const dice = require("./dice");
const diceMessage = require("./dice");
const character = require("./characters");

let terrainChosen;

function startBattle(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        terrainChosen = terrain.chooseTerrain();
        console.log(terrainChosen);
    
        let player1Dice = dice.rollDice();
        let player2Dice = dice.rollDice();

        if (terrainChosen === "Open Terrain") {
            
            let player1Result = player1Dice + character1.dexterity;
            let player2Result = player2Dice + character2.dexterity;
    
            if (player1Result > player2Result) {
                console.log("DROW WINS");
                diceMessage.rollDiceMessage(character1.name, player1Dice, character1.dexterity);
                console.log(`${character1.name}: ${player1Result}`);
                console.log(`${character2.name}: ${player2Result}`);
            } else if (player2Result > player1Result) {
                console.log("HUMAN WINS");
                diceMessage.rollDiceMessage(character2.name, player2Dice, character2.dexterity);
                console.log(`${character1.name}: ${player1Result}`);
                console.log(`${character2.name}: ${player2Result}`);
            }
    
        }

        console.log("-------------------");
    }
}

startBattle(character.player1, character.player2);