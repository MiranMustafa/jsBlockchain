const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const blockchain = require('./blockchain');
const uuid = require('uuid/v1');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented:false }));

app.get('/blockchain' , function(req,res) {
    res.send(bitcoin);

});

app.post('/transaction' , function(req,res) {
   const blockIndex=  bitcoin.createNewTransaction(req.body.amount , req.body.sender, req.body.recipient);
   res.json({note: `Transcation will be added in block ${blockIndex}.`});

});

app.get('/mine' , function(req,res){
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    }
    const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash , currentBlockData , nonce);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash , blockHash);
    bitcoin.createNewTransaction(1 , "00", nodeAddress);

    res.json({
        note : "New block mined successfully" ,
        block : newBlock
    })

});

app.listen(3000, function(){
    console.log('Listening on port 3000...');
})