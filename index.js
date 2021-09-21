function receivesAFunction(callbackF){
    callbackF()
}

function returnsANamedFunction(){
    return function named(){return 5}
}

function returnsAnAnonymousFunction(){
    return function () { 
        return 5
    }
}
