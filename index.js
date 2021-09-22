function receivesAFunction(callback) {
    console.log (callback());
}

//returns a named function, takes no arguments
function returnsANamedFunction (){
    return function name() {
        console.log ('Hi')
    }
}

//takes no arguments, returns an annoymous function
function returnsAnAnonymousFunction(){
    return function(){
        console.log ()
    };
}