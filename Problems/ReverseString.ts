function reverseString(str: string): string {
  const newArr: string[] = str.split("");

  let i = 0;
  let j = newArr.length - 1;
  while(i < j){
    let temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
    i++;
    j--;
  }

  return newArr.join("");
}

console.log(reverseString("Hello"));
