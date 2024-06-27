// Open Terrain, Obstacle

function chooseTerrain() {
    let terrain = Math.random();
    let terrainChosen;

    if (terrain < 0.33) {
        terrainChosen = "Open Terrain";
    } else if (terrain < 0.66) {
        terrainChosen = "Obstacle";
    }

    return terrainChosen;
}

module.exports = {
    chooseTerrain,
}