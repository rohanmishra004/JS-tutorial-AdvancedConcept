let counter=0
const getData = () => {
    //Make network api call
    console.log('Fetching data...', counter++)
}
//the above function will make a call everytime the value is entered , this will make multiple api calls 

//in order to prevernt such thing from happening , we will create another function that will delay the call of getData until the key press is delayed by a few seconds so that the api can make proper search items


//here improved function will take two parameters , first the previous function and then a delay value
const improvedGetData = (fn, delay) => {
    let timer;
    return function () {
        //we add context and argument so incase if the original function has some arguments , we can utilise them with this

        let context = this;
        let args = arguments;
        //clearTimeout will clear the timer if the key is pressed within the delay count then again it will start with the timer and once we stop for more than delay only then the getData call will be made
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData.apply(context, arguments)
        }, delay);
    }
}




const betterFunction = improvedGetData(getData, 300);
//only after a certain delay the call will be made , this will optimise our performance