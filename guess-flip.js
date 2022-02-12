import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['call'];
const call = args['call'];

import { flipACoin } from "./modules/coin.mjs";

if (call == null) {
    console.log("Error: no input.\nUsage: node guess-flip.js --call=[heads|tails]")
} else if (call != 'heads' && call != 'tails') {
    console.log("Error: incorrect input.\nUsage: node guess-flip.js --call=[heads|tails]");
} else {
    console.log(flipACoin(call));
}