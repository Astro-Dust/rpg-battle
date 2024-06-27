// Open Terrain, Obstacle

function chooseTerrain() {
    let terrain = Math.random();
    let terrainChosen;

    if (terrain < 0.5) {
        terrainChosen = "Open Terrain";
    } else {
        terrainChosen = "Obstacle";
    }

    return terrainChosen;
}

module.exports = {
    chooseTerrain,
}