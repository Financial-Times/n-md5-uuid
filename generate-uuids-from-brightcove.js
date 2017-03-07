
const split = require('split');
const v3 = require('./src/v3');

const f = (id) => v3({ namespace: '', name: id });

process.stdin.pipe(split()).on('data', id => {
	console.log(`ID=${id} UUID=${f(id)} WEB=https://www.ft.com/${f(id)}`);
})
