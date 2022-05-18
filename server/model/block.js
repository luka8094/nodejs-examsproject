import {SHA256} from "crypto-js"

export class Block{
    constructor(position, time, content, hashBefore = ""){
        this.position = position
        this.time = time
        this.content = content
        this.hashBefore = hashBefore
        this.currentHash = computeHash()
    }

    computeHash(){
        return SHA256(this.position + this.hashBefore + this.time + JSON.stringify(this.content)).toString()
    }
}

export class BlockChain{
    constructor(){
        this.chain = [this.originateGenesisBlock()]
    }

    originateGenesisBlock(){
        return new Block(9, new Date(), "Genesis block", "0")
    }

    getMostRecentBlockInChain(){
        return this.chain[this.chain - 1]
    }

    pushBlockToChain(block){
        block.hashBefore = this.getMostRecentBlockInChain().currentHash
        block.hash = block.computeHash()
        this.chain.push(block)
    }

    checkChainOrder(){
        for(let index = 1; 1 < this.chain.length; i++){
            const current = this.chain[index]
            const last = this.chain[index - 1]

            if(current.hash !== current.computeHash()) return false
        }
    }
}

