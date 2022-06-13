const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const Path = () => {
    const paths = [
        { path: `./run-first-test/specs/Path1.js`, name: "Path1: Dead Click + Failed Green Bean Checkout" },
        { path: `./run-first-test/specs/Path2.js`, name: "Path2: Add Product -> Cart (Staging)" },
        { path: `./run-first-test/specs/Path3.js`, name: "Path3: Dead Click + Success Grapes Checkout" },
        { path: `./run-first-test/specs/Path4.js`, name: "Path4: Rage Click + Failed Green Bean Checkout" },
        { path: "./run-first-test/specs/Path5.js", name: "Path5: Failed Cherries Checkout - No Purchase Click" },
        {
            path: "./run-first-test/specs/Path6.js",
            name: "Path6: Failed Cherries Checkout - No Purchase Click (Exp B)"
        },
        { path: "./run-first-test/specs/Path7.js", name: "Path7: Add Product" }
    ];

    const index = randomIntFromInterval(1, paths.length);
    return paths[index - 1];
};

const path = Path();
module.exports = path;
