/**
 * Applies async magic to handle almost any shit in your code.
 *
 * @summary The golden hack.
 * @param {Function} f
 */
export default function fix (f) {
    return setTimeout(f, 0);
}