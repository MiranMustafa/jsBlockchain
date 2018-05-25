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
        sender:'JK8KI29DJ49FJ0239KLDFJ',
        recipient: 'DSDIJFI0JE92JD94N893409U4H'
    },
    {
        amount:30,
        sender:'9KJDIWK93KDKFJ0239KLDFJ',
        recipient: '923JKSDIA94N893409U4H'
    },
];
const nonce = 100;

const a =bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);
console.log(a);
