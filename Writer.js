const fs = require('fs')
const util = require('util')
const { throws } = require('assert')

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(filename, data){
        try{
            return await this.writer(filename,data)
            return true
        }catch(err){
            return false
        }   
    }
}

module.exports = Writer