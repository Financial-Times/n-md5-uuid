
const async = require('async');
const fetch = require('node-fetch');
const split = require('split');

const task = (opts, callback) => {
	console.log(process.env.apiKey)
	fetch(opts.url, {
		headers: {
			'x-api-key': process.env.apiKey
		}
	})
		.then(res => {
			console.log(`${opts.brightcove} ${opts.url} ${res.status}`)
			callback()
		})
		.catch(e => {
			console.log(`${opts.brightcove} ${opts.url} ${e}`)
			callback()
		})
}

const q = async.queue(task, 5);

q.drain = () => {
		console.log('TASK ALL DONE');
};

process.stdin.pipe(split()).on('data', data => {

	if (!data) {
		return;
	}

	let [brightcove, url] = data.split('=') || [];

	q.push({brightcove: brightcove, url: url}, () => console.log(`TASK ${url} COMPLETE`));

})
