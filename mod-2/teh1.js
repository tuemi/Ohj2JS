var numbers = [];

for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt("Enter number " + (i + 1) + ":"));
    numbers.push(num);
}

console.log("Numbers in reverse order:");
for (var j = numbers.length - 1; j >= 0; j--) {
    console.log(numbers[j]);
}
