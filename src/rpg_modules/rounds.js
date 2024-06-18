const terrain = require("./terrains");
let terrainChosen;

for (let round = 1; round <= 5; round++) {
    terrainChosen = terrain.chooseTerrain();
    console.log(terrainChosen);
}