/**
 * mathUtils.js
 * Funciones aritméticas básicas
 */

/**
 * Suma dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function sumar(a, b) {
  return a + b;
}

/**
 * Resta dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function restar(a, b) {
  return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiplicar(a, b) {
  return a * b;
}

/**
 * Divide dos números (con verificación de división por cero)
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 */
export function dividir(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}
