const fs = require('fs');
const filewatcher = require('filewatcher');
const sharp = require('sharp');
const { twilight, eclipse } = require('./theme');

function requireUncached(module) {
	delete require.cache[require.resolve(module)];
	return require(module);
}

function generateTheme() {
	const { base, storm, schema, svg } = requireUncached('./theme');
	fs.writeFile(
		'themes/oXocarbonix-color-theme.json',
		schema(base),
		(err) => err && console.log(err)
	);
	fs.writeFile(
		'themes/oXocarbonix-color-theme-storm.json',
		schema(storm),
		(err) => err && console.log(err)
	);
	fs.writeFile(
		'themes/oXocarbonix-color-theme-twilight.json',
		schema(twilight),
		(err) => err && console.log(err)
	);
	fs.writeFile(
		'themes/oXocarbonix-color-theme-eclipse.json',
		schema(eclipse),
		(err) => err && console.log(err)
	);
	delete base.colors.black;
	delete base.colors.transparent;
	sharp(Buffer.from(svg(base).trim()), { density: 400 })
		.png()
		.toFile('assets/dots.png');
	console.log('assets saved ...');
}

const watcher = filewatcher();
watcher.add('src/theme.js');

watcher.on('change', function (file) {
	console.log(`${file} modified`);
	generateTheme();
});

generateTheme();
