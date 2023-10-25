///function currying 

const multiply = function(a){
    return function(b){
        return a*b;
    }
}
//short form
const curriedMultiply = (a) => (b) => a * b

curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(20)
