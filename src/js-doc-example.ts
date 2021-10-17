/**
 * @param {string} subject
 * @returns {boolean}
 */
export function hello(subject) {
  console.log(`Hello ${subject}!`);
  return true;
}

/**
 * @param {string} subject
 * @returns {Promise<boolean>}
 */
export async function asyncHello(subject) {
  console.log(`Hello ${subject}!`);
  return true;
}
