const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.data = data;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }


}

class Blockchain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block("17/03/2018", "GenesisBlock", 0, "");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }


    addBLock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

}

let businessBlockchain = new Blockchain();

businessBlockchain.addBLock(new Block('18/03/2018', { 'make' : 'Tesla', 'model' : 'Model S' }));
businessBlockchain.addBLock(new Block('19/04/2018', { 'make' : 'BMW' , 'model' : 'M2 Coupe'}));
businessBlockchain.addBLock(new Block('19/04/2018', { 'make' : 'BMW' , 'model' : 'M3 Coupe'}));
businessBlockchain.addBLock(new Block('18/03/2018', { 'make' : 'Tesla', 'model' : 'Model X' }))


console.log(JSON.stringify(businessBlockchain, null, 3));