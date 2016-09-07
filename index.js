var postcss = require('postcss');

module.exports = postcss.plugin('postcss-celebcolors', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (root, result) {
          var validChars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        // Transform CSS AST here
            /* If character is #, remove from array */
            if(letter === '#'){
              colorString.splice(letter, 1);
            }

            /* If character is not a valid char or number, replace with 0 */
            if(!(validChars.indexOf(letter) > -1)){

              var contains = function (haystack, needle) {
                  return !!~haystack.indexOf(needle);
              };
              //letter = 0;
              let index = colorString.indexOf(letter);
              colorString[index] = 0;
            }
            //if array length 1 - 2
            //else array length 3
            // else
            if(colorString.length < 3) {
                colorString.push('0');
            }
    };
});
