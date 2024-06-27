const player1 = {
    "name": "Araella",
    "race": "Drow",
    "class": "Rogue",
    "strength": 13,
    "dexterity": 13,
    "health": 25,
    "attack": (opponent) => {
        if (opponent.health > 0) {
            opponent.health -= player1.strength;
            if (opponent.health < 0) {
                opponent.health = 0;
            }
            return opponent.health;
        }
    }
}

const player2 = {
    "name": "Arthur",
    "race": "Human",
    "class": "Warrior",
    "strength": 13,
    "dexterity": 11,
    "health": 25,
    "attack": (opponent) => {
        if (opponent.health > 0) {
            opponent.health -= player2.strength;
            if (opponent.health < 0) {
                opponent.health = 0;
            }
            return opponent.health;
        }
    }
}

module.exports = {
    player1,
    player2
}