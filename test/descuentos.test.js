const assert = require("assert");
const { calcularTotal } = require("../src/descuentos");

assert.strictEqual(calcularTotal(100, 20), 80);
assert.strictEqual(calcularTotal(50, 0), 50);
assert.strictEqual(calcularTotal(100,'estudiante'),85)

console.log("Tests ejecutados correctamente");
