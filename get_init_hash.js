var saladPair = require('./build/SaladPair.json');
var solidity = require('@ethersproject/solidity');

var INIT_CODE_HASH = solidity.keccak256(['bytes'], [`0x${saladPair.bytecode}`]);
console.log('-- INIT_CODE_HASH : ', INIT_CODE_HASH)