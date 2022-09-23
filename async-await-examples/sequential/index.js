const { taskOne, taskTwo } = require('./tasks');

async function main(){
    try{
        
        console.time('Measuring Time');        
        const valueOne = await taskOne();
        const valueTwo = await taskOne();
        console.timeEnd('Measuring Time');

        console.log('Task One returned', valueOne);
        console.log('Task Two Two', valueTwo);


    }catch (error){
        console.log(error);
    }
}

main();