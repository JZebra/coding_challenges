
/*
Write a simple calculator function, calculate, appropriate for roughly the 1920s. Clerks need a simple running tally to total things up. This calculator borrows from stack machines and Reverse Polish Notation (RPN), but with changes.

    Accept a string of integers and operators, operate on them, and return the numeric result. To simplify, ignore order of operations. Just operate in the order provided, as a store clerk might expect
    The input is a simple string.
    '1234+++'
        => 10

    '1234++-'
        => 2

    '+12+34-'
        => 2

    '123,32,+,+,8'
*/

function calculate(str, delimeter) {
    var operators = ['+', '-']
    var int_queue = [];
    var operator_queue = [];
    delimeter = delimeter || '';
    // generate queues
    str.split(delimeter).forEach(function(char){
        if (operators.indexOf(char) === -1) {
            int_queue.push(Number(char));
        } else {
            operator_queue.push(char);
        }
    });

    var total = int_queue.shift();
    var int, operator;
    while (int_queue.length > 0 && operator_queue.length > 0) {
        operator = operator_queue.shift();
        int = int_queue.shift();
        if (operator == '+') {
            total += int
        } else if (operator == '-') {
            total -= int
        }
    }
    return total;
}

console.log(calculate('1234+++'))
console.log(calculate('1234++-'))
console.log(calculate('+123-4+'))
console.log(calculate('123,32,+,+,8', ','));

