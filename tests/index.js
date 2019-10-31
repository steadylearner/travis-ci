// https://github.com/steadylearner/JavaScript-Full-Stack/blob/master/Express/src/test/index.js
// https://www.google.com/search?client=firefox-b-d&q=jest+with+supertest+example

// If files becomes larget, consider using jest instead

const test = require("tape");
const supertest = require("supertest");

const app = require("../server");
const request = supertest(app);

const assert = require('assert');

const chalk = require("chalk");

// Functional Test(End to End) here because what we want to verify is request and response only
// This is faster than jest

test("GET /hello with promise", done => {
	request
		.get('/hello')
		.expect(200)
		.then(response => {
			const blue = chalk.blue;
			const msg = blue("Should return 200 OK with 'hello'");

			try {
				assert.strictEqul(response.text, "hello");
			} catch (e) {
				console.log(e);
				done.fail(msg);
			}

			done.pass(msg);
			done.end();
		});
});

test("GET /hello with async", async done => {

	const blue = chalk.blue;
	const msg = blue("Should return 200 OK with 'hello'");

	try {
		const req = await request
			.get('/hello')
			.expect(200);
		assert.strictEqul(req.text, "hello");
	} catch(e) {
		console.log(e);
		done.fail(msg);
	}

	done.pass(msg);
	done.end();
});


