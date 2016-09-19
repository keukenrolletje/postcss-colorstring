var postcss = require('postcss');


module.exports = postcss.plugin('postcss-colorstring', function () {

    return function (css) {
        css.walkDecls(/-ie$/, decl => {
            var colorProp = decl.prop;
            decl.prop = colorProp.replace('-ie', '');
            var colorString = decl.value.split('');
            var validChars = ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D',
                'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7',
                '8', '9'
            ];

            var colors = {
                /**
                 * Color array
                 */
                aliceblue: '#f0f8ff',
                antiquewhite: '#faebd7',
                aqua: '#00ffff',
                aquamarine: '#7fffd4',
                azure: '#f0ffff',
                beige: '#f5f5dc',
                bisque: '#ffe4c4',
                black: '#000000',
                blanchedalmond: '#ffebcd',
                blue: '#0000ff',
                blueviolet: '#8a2be2',
                brown: '#a52a2a',
                burlywood: '#deb887',
                cadetblue: '#5f9ea0',
                chartreuse: '#7fff00',
                chocolate: '#d2691e',
                coral: '#ff7f50',
                cornflowerblue: '#6495ed',
                cornsilk: '#fff8dc',
                crimson: '#dc143c',
                cyan: '#00ffff',
                darkblue: '#00008b',
                darkcyan: '#008b8b',
                darkgoldenrod: '#b8860b',
                darkgray: '#a9a9a9',
                darkgreen: '#006400',
                darkgrey: '#a9a9a9',
                darkkhaki: '#bdb76b',
                darkmagenta: '#8b008b',
                darkolivegreen: '#556b2f',
                darkorange: '#ff8c00',
                darkorchid: '#9932cc',
                darkred: '#8b0000',
                darksalmon: '#e9967a',
                darkseagreen: '#8fbc8f',
                darkslateblue: '#483d8b',
                darkslategray: '#2f4f4f',
                darkslategrey: '#2f4f4f',
                darkturquoise: '#00ced1',
                darkviolet: '#9400d3',
                deeppink: '#ff1493',
                deepskyblue: '#00bfff',
                dimgray: '#696969',
                dimgrey: '#696969',
                dodgerblue: '#1e90ff',
                firebrick: '#b22222',
                floralwhite: '#fffaf0',
                forestgreen: '#228b22',
                fuchsia: '#ff00ff',
                gainsboro: '#dcdcdc',
                ghostwhite: '#f8f8ff',
                gold: '#ffd700',
                goldenrod: '#daa520',
                gray: '#808080',
                green: '#008000',
                greenyellow: '#adff2f',
                grey: '#808080',
                honeydew: '#f0fff0',
                hotpink: '#ff69b4',
                indianred: '#cd5c5c',
                indigo: '#4b0082',
                ivory: '#fffff0',
                khaki: '#f0e68c',
                lavender: '#e6e6fa',
                lavenderblush: '#fff0f5',
                lawngreen: '#7cfc00',
                lemonchiffon: '#fffacd',
                lightblue: '#add8e6',
                lightcoral: '#f08080',
                lightcyan: '#e0ffff',
                lightgoldenrodyellow: '#fafad2',
                lightgray: '#d3d3d3',
                lightgreen: '#90ee90',
                lightgrey: '#d3d3d3',
                lightpink: '#ffb6c1',
                lightsalmon: '#ffa07a',
                lightseagreen: '#20b2aa',
                lightskyblue: '#87cefa',
                lightslategray: '#778899',
                lightslategrey: '#778899',
                lightsteelblue: '#b0c4de',
                lightyellow: '#ffffe0',
                lime: '#00ff00',
                limegreen: '#32cd32',
                linen: '#faf0e6',
                magenta: '#ff00ff',
                maroon: '#800000',
                mediumaquamarine: '#66cdaa',
                mediumblue: '#0000cd',
                mediumorchid: '#ba55d3',
                mediumpurple: '#9370db',
                mediumseagreen: '#3cb371',
                mediumslateblue: '#7b68ee',
                mediumspringgreen: '#00fa9a',
                mediumturquoise: '#48d1cc',
                mediumvioletred: '#c71585',
                midnightblue: '#191970',
                mintcream: '#f5fffa',
                mistyrose: '#ffe4e1',
                moccasin: '#ffe4b5',
                navajowhite: '#ffdead',
                navy: '#000080',
                oldlace: '#fdf5e6',
                olive: '#808000',
                olivedrab: '#6b8e23',
                orange: '#ffa500',
                orangered: '#ff4500',
                orchid: '#da70d6',
                palegoldenrod: '#eee8aa',
                palegreen: '#98fb98',
                paleturquoise: '#afeeee',
                palevioletred: '#db7093',
                papayawhip: '#ffefd5',
                peachpuff: '#ffdab9',
                peru: '#cd853f',
                pink: '#ffc0cb',
                plum: '#dda0dd',
                powderblue: '#b0e0e6',
                purple: '#800080',
                rebeccapurple: '#663399',
                red: '#ff0000',
                rosybrown: '#bc8f8f',
                royalblue: '#4169e1',
                saddlebrown: '#8b4513',
                salmon: '#fa8072',
                sandybrown: '#f4a460',
                seagreen: '#2e8b57',
                seashell: '#fff5ee',
                sienna: '#a0522d',
                silver: '#c0c0c0',
                skyblue: '#87ceeb',
                slateblue: '#6a5acd',
                slategray: '#708090',
                slategrey: '#708090',
                snow: '#fffafa',
                springgreen: '#00ff7f',
                steelblue: '#4682b4',
                tan: '#d2b48c',
                teal: '#008080',
                thistle: '#d8bfd8',
                tomato: '#ff6347',
                turquoise: '#40e0d0',
                violet: '#ee82ee',
                wheat: '#f5deb3',
                white: '#ffffff',
                whitesmoke: '#f5f5f5',
                yellow: '#ffff00',
                yellowgreen: '#9acd32'
            };

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

            function colorChecker() {
                var i;
                for (var prop in colors) {
                    if (prop === decl.value) {
                        i = true;
                    } else {
                        i = false;
                    }
                }
                return i;
            }

            function checkAll(arr) {
                if (arr[0] === '#' &&
                    validChars.indexOf(arr[1]) > -1) {
                    return true;
                } else {
                    return false;
                }
            }

            var checkedString = checkAll(colorString);

            if (colorChecker() === false) {
                colorString.forEach(function (letter) {
                    /*
                     * If character is #, remove from array, we do not
                     * remove spaces because it will give wrong colors
                     */
                    if (letter === '#') {
                        colorString.splice(letter, 1);
                    }

                    /*
                     * If character is not a valid char
                     * or number, replace with 0
                     */
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

                /* After we have pushed to length 3
                 * prepend each
                 * check if string was already
                 * invalid in the beginning
                 */
                if (colorString.length === 3 && checkedString === false) {
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

            }


        });
    };
});
