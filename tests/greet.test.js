const { test } = require("node:test");
const assert = require("node:assert");
const { greet } = require("../Public/script.js");

test("greet returns Hello, World!", () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
