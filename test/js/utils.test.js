import test from 'ava';
import { sum, diff, prod, quot, fibonacci, fibonacci_on_memory } from 'js/utils';

test('fibonacci [0]', t => {
  t.is(fibonacci(0), 0);
});

test('fibonacci [1]', t => {
  t.is(fibonacci(1), 1);
});

test('fibonacci [2]', t => {
  t.is(fibonacci(2), 1);
});

test('fibonacci [-1]', t => {
  const error = t.throws(() => {
    fibonacci(-1);
  }, Error);
  t.is(error.message, '`n` must be positive number!')
});

test('fibonacci_on_memory [0]', t => {
  t.is(fibonacci_on_memory(0), 0);
});

test('fibonacci_on_memory [1]', t => {
  t.is(fibonacci_on_memory(1), 1);
});

test('fibonacci_on_memory [2]', t => {
  t.is(fibonacci_on_memory(2), 1);
});

test('fibonacci_on_memory [-1]', t => {
  const error = t.throws(() => {
    fibonacci_on_memory(-1);
  }, Error);
  t.is(error.message, '`n` must be positive number!')
});
