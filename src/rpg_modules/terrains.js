// Open Terrain, Obstacle, or Ambush

function chooseTerrain() {
    let terrain = Math.random();
    let terrainChosen;

    if (terrain < 0.33) {
        terrainChosen = "Open Terrain";
    } else if (terrain < 0.66) {
        terrainChosen = "Obstacle";
    } else {
        terrainChosen = "Ambush";
    }

    return terrainChosen;
}

module.exports = {
    chooseTerrain,
}