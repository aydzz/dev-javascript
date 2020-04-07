//Use recursion to show the Fibonacci Algorithm
function fibonacci(num){
    if(num === 1 || num === 0){
        return num;
    }else{
        return fibonacci(num - 2) + fibonacci(num - 1);
    }
}
//From net with Memoization
/* 
* ISSUE for plain fibonacci(number- 1) + fibonacci(number - 2):
*   it stacks another function call ( which is the fibonacci(number- 1) ) so there would be unnecessary calls that has been call by fibonacci(number - 2)
*   to solve this problem, we save the former call ( example if fib( n - 2) where n = 3 then fib(n - 1) would definitely be called with the same output)
*   to optimize this, we would save the fib(n - 2) call to cache then check if the call has been made with the same number ( num - 2)
*/
var cache = {};
function fibonacciB(number) {
    
    if (number < 1)
        return 0;

    if (number <= 2)
        return 1;
    
    if (number in cache)
        return cache[number];
    
    var value = fibonacci(number- 1) + fibonacci(number - 2);
        
    cache[number] = value;

    return value;
}
fibonacciB(10);



