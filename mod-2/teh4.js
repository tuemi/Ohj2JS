var numbers = [];

while (true) {
    var num = parseFloat(prompt("Enter a number (enter 0 to stop):"));
    if (num === 0) {
        break;
    }
    numbers.push(num);
}

numbers.sort(function(a, b) {
    return b - a;
});

console.log("Numbers from largest to smallest:");
numbers.forEach(function(number) {
    console.log(number);
});
