import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['number'];
const number = args['number'] || 1;

import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
console.log(coinFlips(number));
console.log(countFlips(coinFlips(number)));