var numbers = [];

while (true) {
    var num = parseFloat(prompt("Enter a number (enter 0 to stop):"));
    if (num === 0) {
        break;
    }
    if (numbers.includes(num)) {
        console.log("The number " + num + " has already been given.");
        break;
    }
    numbers.push(num);
}

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Given numbers in ascending order:");
numbers.forEach(function(number) {
    console.log(number);
});
