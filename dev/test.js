const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(123123,'ASD12ASD','1SSDFSDF123');

bitcoin.createNewTransaction(10,'ALEXASDASD9Q','JENQFN230OW918');

bitcoin.createNewBlock(8273,'ASDKDJ12ASD','9SDFAKPQEF123');

bitcoin.createNewTransaction(99,'ALEXASDASD9Q','JENQFN230OW918');

bitcoin.createNewTransaction(33,'ALEXASDASD9Q','JENQFN230OW918');

bitcoin.createNewTransaction(1,'ALEXASDASD9Q','JENQFN230OW918');

bitcoin.createNewBlock(1111,'09AOQWM12AS','92ASNKD01923');




console.log(bitcoin.chain[2]);