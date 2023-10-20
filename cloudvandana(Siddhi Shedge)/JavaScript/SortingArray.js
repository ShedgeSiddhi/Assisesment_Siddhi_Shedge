const numbers = [5, 2, 9, 1, 5, 6];
const n = numbers.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (numbers[j] < numbers[j + 1]) {
            const temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers); 
