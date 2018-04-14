import * as assert from "assert";
import {Counter} from "../src/Counter";

describe("Counter.increment", () => {
	it("should increase value", () => {
		assert.equal(Counter.increment(2), 3);
		assert.equal(Counter.increment(6), 7);
	});
});
