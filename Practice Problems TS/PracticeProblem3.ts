// !: create a method decorator that logs the time taken from a function to execute.

function LogExecutionTime(
  _target: any, // ✅ mark as intentionally unused
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Execution time for: ${propertyKey} is: ${end - start}ms.`);
    return result;
  };
}


class BasicMathOperations {
  @LogExecutionTime
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const math = new BasicMathOperations();
console.log(math.multiply(2, 3));
