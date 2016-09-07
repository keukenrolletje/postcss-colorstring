var postcss = require('postcss');

module.exports = postcss.plugin('postcss-celebcolors', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (root, result) {
          var validChars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        // Transform CSS AST here

    };
});
