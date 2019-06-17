# kostil.js

It's like lodash but for the next level of JS code.

## API

```javascript
/**
 * Applies async magic to handle almost any shit in your code.
 *
 * @summary The golden hack.
 * @param {Function} f
 */
fix(f);

/**
 * Takes a function following the common promise style,
 * and returns function in error-first style
 * i.e. taking a (err, value) => ... callback as the last argument.
 *
 * @param {function} f
 * @returns {Function}
 */
callbackotify(f);

/**
 * Evaluates code in the safe way!
 *
 * @param {String} code
 */
safeEval(code);

/**
 * Returns an human-readable and understandable boolean.
 * Brilliant solution for client-server communications.
 *
 * @param {Boolean} boolean
 * @returns {String}
 */
makeUnderstandableBoolean(boolean);

/**
 * Tries to call THE FUNCTION HARDER!1
 * @param f
 */
tryHard(f);

/**
 * Checks is smth enabled or not
 * @param {Boolean} isDisabled
 * @returns {boolean}
 */
isEnabled (isDisabled);

/**
 * Submits your form if you don't know about type="submit"
 * @param form
 * @param button
 */
submitForm (form, button);

/**
 * Parses string as JSON or don't
 * @param {String} jsonOrNot
 * @credits @subzey
 */
parseJSONorNot(jsonOrNot);


/**
 * Chain second argument to promise, if first arg is Promise,
 * otherwise pass fisrt argument to second.
 * @param {Object} maybePromise
 * @param {Function} cb
 */
handleIfPromise(maybePromise, cb);

/**
 * Checks self length to understand is app in prod mode or not
 * @returns {boolean}
 */
isProduction();

/**
 * Helps to debug your code.
 * Works only in dev mode.
 */
deb ();
}

/**
 * Detect availability of ES6 in browser
 */
isES6available();

/**
 * Invoke cb each time when devtools opened
 */
onDevtools(cb);
````

## LICENSE

Licensed under [WTFPL](http://www.wtfpl.net/) license

