/**
 * @return {Function}
 */
var createHelloWorld = () => {
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
