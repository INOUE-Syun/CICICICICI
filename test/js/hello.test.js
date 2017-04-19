import test from 'ava';
import helloAnything from 'js/hello';

test('helloAnything', t => {
  t.is(helloAnything('TEST'), 'Hello TEST!!!');
});
