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
    run(t, 'a { color: chucknorris; }',
           'a { color: #c00000; }');
});
