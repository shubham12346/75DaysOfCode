function decodeString(s: string): string {
  let chars = s.split("");
  let stringsStack = [];
  let numberStack: number[] = [];
  let stringPointer = 0;
  let num = 0;

  for (let index = 0; index < s.length; index++) {
    if (Number(chars[index]) >= 0 && Number(chars[index]) <= 9) {
      num = num * 10 + Number(chars[index]) - 0;
      continue;
    }
    if (chars[index] == "[") {
      numberStack.push(num);
      num = 0;
      stringsStack.push(chars[index]);
      stringPointer++;
      continue;
    }
    if (chars[index] !== "]") {
      stringsStack.push(chars[index]);
      stringPointer++;
      continue;
    }
    let repeatString = "";
    while (
      stringsStack.length > 0 &&
      stringsStack[stringsStack.length - 1] !== "["
    ) {
      repeatString = "" + stringsStack[stringsStack.length - 1] + repeatString;
      stringsStack.pop();
      stringPointer--;
    }

    stringsStack.pop();
    let repeatLength: number = Number(numberStack.pop());
    let resultStr = "";
    while (repeatLength > 0) {
      resultStr = repeatString + resultStr;
      repeatLength--;
    }
    stringsStack.push(resultStr);
  }

  return stringsStack.join("");
}

let ans1 = decodeString("100[leetcode]");
console.log("ans", ans1);
