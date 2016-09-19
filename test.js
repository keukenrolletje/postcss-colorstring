import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

/* Write tests here */

test('chucknorris is color #c00000', t => {
    run(t, 'a { color-ie: chucknorris; }',
           'a { color: #c00000; }');
});

test('Do not colorstring existing colors', t => {
    run(t, 'a { color-ie: red; }',
           'a { color: red; }');
});

test('Normal colors still work', t => {
    run(t, 'a { color-ie: #010101; }',
           'a { color: #010101; }');
});
test('Normal colors (3) still work', t => {
    run(t, 'a { color-ie: #fff; }',
           'a { color: #fff; }');
});
