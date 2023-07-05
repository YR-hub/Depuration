function fibonacciSequence(num) {
  const sequence = [1, 1];

  for (let i = 2; i < num; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

const num = 6;
const result = fibonacciSequence(num);
console.log(result);
