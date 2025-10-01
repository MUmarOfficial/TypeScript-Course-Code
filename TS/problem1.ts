function mergeAlternately(word1: string, word2: string): string {
  let result: string = "";
  let n1 = word1.length;
  let n2 = word2.length;
  let n = n1 + n2;

  for (let i = 0; i < n; i++) {
    result += word1[i] + word2[i];
  }

  if (n1 === n2) {
    return result;
  }
}

console.log(mergeAlternately("abc", "def"));
// def mergeAlternately(self, word1: str, word2: str) -> str:
//     result = ""
//     n1 = len(word1)
//     n2 = len(word2)
//     n = min(n1, n2)

//     for i in range(n):
//         result += word1[i] + word2[i]

//     if n1 == n2:
//         return result
//     elif n1 > n2:
//         return result + word1[n:]
//     else:
///         return result + word2[n:]

// print(mergeAlternately("n", "abc12", "def"))
