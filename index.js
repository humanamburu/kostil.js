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
 * Takes a function following the common promise style,
 * and returns function in error-first style
 * i.e. taking a (err, value) => ... callback as the last argument.
 *
 * @param {function} f
 * @returns {Function}
 */
export function callbackotify(f) {
    return (callback, ...args) => {
        f(...args)
            .then(res => callback(null, res))
            .catch(e => callback(e, null));
    };
}

/**
 * Evaluates code in the safe way!
 *
 * @param {String} code
 */
export function safeEval (code) {
    'use strict';
    try {
        'use strict';
        eval('\'use strict;\'' + code);
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

/**
 * Tries to call THE FUNCTION HARDER!1
 * @param f
 */
export function tryHard (f) {
    while (true) {
        try {
            return f();
        } catch (e) {
            console.log('Try harder!');
        }
    }
}

/**
 * Checks is smth enabled or not
 * @param {Boolean} isDisabled
 * @returns {boolean}
 */
export function isEnabled (isDisabled) {
    return isDisabled === false;
}

/**
 * Submits your form if you don't know about type="submit"
 * @param form
 * @param button
 */
export function submitForm (form, button) {
    return button.addEventListener('click', (e) => {
        e.preventDefault();
        form.submit()
    });
}

/**
 * Parses string as JSON or don't
 * @param {String} jsonOrNot
 * @credits @subzey
 */
export function parseJSONorNot(jsonOrNot) {
  try {
    return JSON.parse(jsonOrNot);
  } catch (e) {
    return jsonOrNot;
  }
}

/**
 * Checks self length to understand is app in prod mode or not
 * @returns {boolean}
 */
export function isProduction () {
    return isProduction.toString().length < 75;
}

/**
 * Helps to debug your code.
 * Works only in dev mode.
 */
export function deb () {
    if (!isProduction()) {
        debugger;
    }
}
