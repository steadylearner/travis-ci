// https://zellwk.com/blog/endpoint-testing/
// https://jestjs.io/docs/en/asynchronous.html
// Jest will wait until the done callback is called before finishing the test.

const app = require('../server');
// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
// You won't publish supertest or tape.
// Therefore, include this in .eslintrc.json
// "node/no-unpublished-require": [
// 	"error",
// 	{
// 		"allowModules": [
// 			"tape",
// 			"supertest"
// 		]
// 	}
// ],

const supertest = require('supertest');
const request = supertest(app);

describe("Test express with jest and supertest", () => {
	test("GET /hello ", async done => {
		const response = await request
			.get('/hello');

		expect(response.status).toBe(200);
		expect(response.text).toBe('hello');

		done();
	});
});
