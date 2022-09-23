const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne(){
        try{
            await sleep(3000);
            return 'One Value';
        }
        catch (error){
            console.log(error);
        }
    },

    async taskTwo(){
        try{
            await sleep(2000);
            return 'Two Value';
        }
        catch (error){
            console.log(error);
        }
    }
}