function ehPrimo(num: number): boolean {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
}

console.log(ehPrimo(7)); // true
console.log(ehPrimo(12)); // false