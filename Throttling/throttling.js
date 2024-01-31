/**
 * Throttling - rate limiting the function call execution
 */


//Scenario - we have a function that makes network calls and each time its a very expensive call 

const expensive = () => {
    //Expensive Network call
    console.log('Fetching api data...')
}
//in this each time we make a single resize or move the window the expensive call is being made , this would hinder the action as there are multiple calls being triggered simultaneously , better approach would be if we can add some delay to the function call so that the expensive function is called only after a certain delay
// window.addEventListener('resize', expensive)


const throttle = (fn, limit) => {
    //we can use a flag to keep track of the limit , so once the function executes the flag reverses and once limit expires , it again goes to true so the function is executed 
    let flag = true
    return function () {
        if (flag) {
            fn(); 
            //once the function call is complete set the flag as false
            flag = false
        }
        setTimeout(() => {
            flag=true
        }, limit);
    }
}

const betterFunction = throttle(expensive, 200)


//this will ensure that if our function is being triggered again and again 
window.addEventListener('resize',betterFunction)







