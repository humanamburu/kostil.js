/**
 * Applies async magic to handle almost any shit in your code.
 *
 * @summary The golden hack.
 * @param {Function} f
 */
export default function fix (f) {
    return setTimeout(f, 0);
}

/**
 * Evaluates code in the safe way!
 * @param {String} code
 */
export function safeEval (code) {
    try {
        'use strict';
        eval('use strict;' + code);
    } catch (e) {
        console.error('Script evaluation error! \n', e);
    }
}

/**
 * Returns an human-readable and understandable boolean.
 * Brilliant solution for client-server communications.
 *
 * @param {Boolean} boolean
 * @returns {String}
 */
export function makeUnderstandableBoolean (boolean) {
    return boolean ? 'yes' : 'no';
}