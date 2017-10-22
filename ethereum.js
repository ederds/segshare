var Web3 = require('web3');
var util = require('ethereumjs-util');
var tx = require('ethereumjs-tx');
var lightwallet = require('eth-lightwallet');
var txutils = lightwallet.txutils;

var web3 = new Web3(
    new Web3.providers.HttpProvider('http://10.0.1.178:8545')
);

var address = '0xd04347d5A705F3823b7771945914C97007Ee3750';
var key = '5b0f36a3ecf170545852eaa73551005bf4a359d922f60423865675eaa167d21a';

var bytecode = '6060604052 ...';
var interface = [{ "constant": false, "inputs": ""}];

function sendRaw(rawTx) {
    var privateKey = new Buffer(key, 'hex');
    var transaction = new tx(rawTx);
    transaction.sign(privateKey);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
    '0x' + serializedTx, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount(address)),
    gasLimit: web3.toHex(800000),
    gasPrice: web3.toHex(20000000000),
    data: '0x' + bytecode + '0000000000000000000000000000000000000000000000000000000000000005'
};

function Ballot(_numProposals) {
    chairperson = msg.sender;
    voters[chairperson].weight = 1;
    proposals.length = _numProposals;
}

sendRaw(rawTx);