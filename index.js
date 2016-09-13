var postcss = require('postcss');

module.exports = postcss.plugin('postcss-celebcolors', function () {

    return function (css) {
        css.walkDecls(decl => {
            var colorString = decl.value.split('');
            var validChars = ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D',
                              'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7',
                              '8', '9'];


            function largeArr(arr) {
                while (arr.length > 8) {
                    arr.shift();
                }
                return arr;
            }

            function shortenArr(arr) {
                while (arr.length > 2) {
                    arr.pop();
                }
                return arr;
            }

            colorString.forEach(function (letter) {
                /*
                 * If character is #, remove from array, we do not
                 * remove spaces because it will give wrong colors
                 */
                if (letter === '#') {
                    colorString.splice(letter, 1);
                }

                // If character is not a valid char or number, replace with 0
                if (!(validChars.indexOf(letter) > -1)) {
                    // letter = 0;
                    var index = colorString.indexOf(letter);
                    colorString[index] = '0';
                }
            });

            /*
             * We can only add 0 to colorString
             * after we have stripped the hashtag
             */
            while (colorString.length < 3) {
                colorString.push('0');
            }

            // After we have pushed to length 3 prepend each letter with 0
            if (colorString.length === 3) {
                colorString.splice(0, 0, '0');
                colorString.splice(2, 0, '0');
                colorString.splice(4, 0, '0');
            }

            /*
             * When colorString > 4 and As long as colorString is
             * not a multiple of 3, push 0 to array
             */
            if (colorString.length >= 4) {
                while (colorString.length % 3 !== 0) {
                    colorString.push('0');
                }
            }

            // Split array into three equal parts
            var divider = colorString.length / 3;

            // save new array parts
            var part1 = colorString.splice(0, divider);
            var part2 = colorString.splice(0, divider);
            var part3 = colorString.splice(0, divider);

            /*
             * if three individual arrays are bigger than 8, shorten
             * them to 8 by removing chars from front of array
             */
            if (divider > 8) {
                part1 = largeArr(part1);
                part2 = largeArr(part2);
                part3 = largeArr(part3);
            }

            // after that shorten all parts to length of 2
            part1 = shortenArr(part1);
            part2 = shortenArr(part2);
            part3 = shortenArr(part3);


            colorString = part1.concat(part2, part3);
            colorString.unshift('#');
            decl.value = colorString.join('');
        });
    };
});
