var specs = [
  "./multiple/Path1.js",
  "./multiple/Path2.js",
  "./multiple/Path3.js",
  "./multiple/Path4.js",
];

for (var i = specs.length - 1; i >= 0; i--) {
  require(specs[i]);
}
