function isBalanced(str: string): boolean {
  const stack: string[] = [];

  // group all bracket info in one place
  const opening = new Set(["(", "{", "["]);
  const closingToOpening: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of str) {
    // if it's an opening bracket
    if (opening.has(char)) {
      stack.push(char);
    }
    // if it's a closing bracket
    else if (closingToOpening[char]) {
      const last = stack.pop();
      if (last !== closingToOpening[char]) {
        return false;
      }
    }
    // you can ignore other characters, or handle error
  }

  return stack.length === 0;
}

// ✅ Tests
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("")); // true
