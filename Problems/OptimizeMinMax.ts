// Generic interface for comparable types
interface Comparable {
  valueOf(): number | string | boolean;
}

// Options for processing large datasets
interface ProcessingOptions {
  chunkSize?: number;
  onProgress?: (processed: number, total: number) => void;
  abortSignal?: AbortSignal;
}

// Result interface with additional metadata
interface MinMaxResult<T> {
  value: T;
  index: number;
  processed: number;
}

// Error classes for better error handling
class EmptyArrayError extends Error {
  constructor() {
    super("Cannot find min/max of empty array");
    this.name = "EmptyArrayError";
  }
}

class ProcessingAbortedError extends Error {
  constructor() {
    super("Processing was aborted");
    this.name = "ProcessingAbortedError";
  }
}

/**
 * Finds maximum value in array with support for large datasets
 * @param arr Array to search
 * @param options Processing options for large datasets
 * @returns Promise resolving to max result with metadata
 */
async function findMaxAdvanced<T extends Comparable>(
  arr: T[],
  options: ProcessingOptions = {}
): Promise<MinMaxResult<T>> {
  if (arr.length === 0) {
    throw new EmptyArrayError();
  }

  const { chunkSize = 10000, onProgress, abortSignal } = options;

  let max = arr[0];
  let maxIndex = 0;
  let processed = 0;

  // Process in chunks to avoid blocking the main thread
  for (let i = 0; i < arr.length; i += chunkSize) {
    // Check for abort signal
    if (abortSignal?.aborted) {
      throw new ProcessingAbortedError();
    }

    const chunk = arr.slice(i, Math.min(i + chunkSize, arr.length));

    // Process chunk
    for (let j = 0; j < chunk.length; j++) {
      const currentIndex = i + j;
      const currentValue = chunk[j];

      if (currentValue.valueOf() > max.valueOf()) {
        max = currentValue;
        maxIndex = currentIndex;
      }
    }

    processed = Math.min(i + chunkSize, arr.length);

    // Report progress
    onProgress?.(processed, arr.length);

    // Yield control back to event loop for large datasets
    if (chunkSize > 1000) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  return { value: max, index: maxIndex, processed };
}

/**
 * Finds minimum value in array with support for large datasets
 * @param arr Array to search
 * @param options Processing options for large datasets
 * @returns Promise resolving to min result with metadata
 */
async function findMinAdvanced<T extends Comparable>(
  arr: T[],
  options: ProcessingOptions = {}
): Promise<MinMaxResult<T>> {
  if (arr.length === 0) {
    throw new EmptyArrayError();
  }

  const { chunkSize = 10000, onProgress, abortSignal } = options;

  let min = arr[0];
  let minIndex = 0;
  let processed = 0;

  // Process in chunks to avoid blocking the main thread
  for (let i = 0; i < arr.length; i += chunkSize) {
    // Check for abort signal
    if (abortSignal?.aborted) {
      throw new ProcessingAbortedError();
    }

    const chunk = arr.slice(i, Math.min(i + chunkSize, arr.length));

    // Process chunk
    for (let j = 0; j < chunk.length; j++) {
      const currentIndex = i + j;
      const currentValue = chunk[j];

      if (currentValue.valueOf() < min.valueOf()) {
        min = currentValue;
        minIndex = currentIndex;
      }
    }

    processed = Math.min(i + chunkSize, arr.length);

    // Report progress
    onProgress?.(processed, arr.length);

    // Yield control back to event loop for large datasets
    if (chunkSize > 1000) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  return { value: min, index: minIndex, processed };
}

/**
 * Finds both min and max in a single pass for better performance
 * @param arr Array to search
 * @param options Processing options for large datasets
 * @returns Promise resolving to object with min and max results
 */
async function findMinMax<T extends Comparable>(
  arr: T[],
  options: ProcessingOptions = {}
): Promise<{ min: MinMaxResult<T>; max: MinMaxResult<T> }> {
  if (arr.length === 0) {
    throw new EmptyArrayError();
  }

  const { chunkSize = 10000, onProgress, abortSignal } = options;

  let min = arr[0];
  let max = arr[0];
  let minIndex = 0;
  let maxIndex = 0;
  let processed = 0;

  // Process in chunks
  for (let i = 0; i < arr.length; i += chunkSize) {
    if (abortSignal?.aborted) {
      throw new ProcessingAbortedError();
    }

    const chunk = arr.slice(i, Math.min(i + chunkSize, arr.length));

    for (let j = 0; j < chunk.length; j++) {
      const currentIndex = i + j;
      const currentValue = chunk[j];
      const val = currentValue.valueOf();

      if (val < min.valueOf()) {
        min = currentValue;
        minIndex = currentIndex;
      }
      if (val > max.valueOf()) {
        max = currentValue;
        maxIndex = currentIndex;
      }
    }

    processed = Math.min(i + chunkSize, arr.length);
    onProgress?.(processed, arr.length);

    if (chunkSize > 1000) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  return {
    min: { value: min, index: minIndex, processed },
    max: { value: max, index: maxIndex, processed },
  };
}

// Synchronous versions for smaller datasets (original behavior)
function findMaxAnother<T extends Comparable>(arr: T[]): T {
  if (arr.length === 0) {
    throw new EmptyArrayError();
  }

  let max = arr[0];
  for (const item of arr) {
    if (item.valueOf() > max.valueOf()) {
      max = item;
    }
  }
  return max;
}

function findMinAnother<T extends Comparable>(arr: T[]): T {
  if (arr.length === 0) {
    throw new EmptyArrayError();
  }

  let min = arr[0];
  for (const item of arr) {
    if (item.valueOf() < min.valueOf()) {
      min = item;
    }
  }
  return min;
}

// Generator functions for memory-efficient streaming
function* findMaxStream<T extends Comparable>(
  source: Iterable<T>
): Generator<T, T, unknown> {
  const iterator = source[Symbol.iterator]();
  let result = iterator.next();

  if (result.done) {
    throw new EmptyArrayError();
  }

  let max = result.value;
  yield max;

  while (!(result = iterator.next()).done) {
    if (result.value.valueOf() > max.valueOf()) {
      max = result.value;
      yield max;
    }
  }

  return max;
}

function* findMinStream<T extends Comparable>(
  source: Iterable<T>
): Generator<T, T, unknown> {
  const iterator = source[Symbol.iterator]();
  let result = iterator.next();

  if (result.done) {
    throw new EmptyArrayError();
  }

  let min = result.value;
  yield min;

  while (!(result = iterator.next()).done) {
    if (result.value.valueOf() < min.valueOf()) {
      min = result.value;
      yield min;
    }
  }

  return min;
}

// Example usage
async function example() {
  // Basic usage (synchronous)
  console.log("Basic usage:");
  try {
    console.log(findMaxAnother([1, 4, 233, 2, 34])); // 233
    console.log(findMinAnother([1, 4, 233, -1, 34])); // -1

    // Works with strings too
    console.log(findMaxAnother(["apple", "banana", "cherry"])); // 'cherry'
    console.log(findMinAnother(["apple", "banana", "cherry"])); // 'apple'
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }

  // Advanced usage for large datasets
  console.log("\nAdvanced usage:");
  const largeArray = Array.from(
    { length: 50000 },
    (_, i) => Math.random() * 1000
  );

  try {
    // With progress reporting
    const maxResult = await findMaxAdvanced(largeArray, {
      chunkSize: 5000,
      onProgress: (processed, total) => {
        const percent = ((processed / total) * 100).toFixed(1);
        console.log(`Progress: ${percent}% (${processed}/${total})`);
      },
    });

    console.log(`Max: ${maxResult.value} at index ${maxResult.index}`);

    // Find both min and max efficiently
    const { min, max } = await findMinMax(largeArray, { chunkSize: 10000 });
    console.log(`Min: ${min.value}, Max: ${max.value}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Error:", error);
    }
  }

  // Streaming example
  console.log("\nStreaming example:");
  const numbers = [1, 5, 2, 8, 3, 9, 1];
  const maxStream = findMaxStream(numbers);

  console.log("Max values as they are found:");
  for (const currentMax of maxStream) {
    console.log(currentMax);
  }
}

// Run example
example().catch(console.error);
