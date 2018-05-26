const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
const previousBlockHash = '9FH498HF9C34H93H4J9H3948H3HOIJ02';
const currentBlockData = [
    {
        amount:10,
        sender:'9283283NJKDKFJ0239KLDFJ',
        recipient: 'DSDIJFI094N893409U4H'
    },
    {
        amount:20,
        sender:'JKKI29DJ49FJ0239KLDFJ',
        recipient: 'DSDJFI0JE92JD94N893409U4H'
    },
    {
        amount:30,
        sender:'9KJDIWK93KDKFJ0239KLFJ',
        recipient: '923JKSDIA94N893409U4H'
    },
];
let a =bitcoin.proofOfWork(previousBlockHash,currentBlockData);
console.log(a);

let hash = bitcoin.hashBlock(previousBlockHash,currentBlockData,a);
console.log(hash);
