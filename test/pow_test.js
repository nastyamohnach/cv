import {pow} from '../main.js';
import assert from 'node:assert/strict';

assert(pow(2, 2) === 4)
assert(pow(0, 5) === 0)
assert(pow(1, 0) === 1)
assert(pow(2, 3) === 8)
