function decodeString(s) {
    var chars = s.split("");
    var stringsStack = [];
    var numberStack = [];
    var stringPointer = 0;
    var num = 0;
    for (var index = 0; index < s.length; index++) {
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
        var repeatString = "";
        while (stringsStack.length > 0 &&
            stringsStack[stringsStack.length - 1] !== "[") {
            repeatString = "" + stringsStack[stringsStack.length - 1] + repeatString;
            stringsStack.pop();
            stringPointer--;
        }
        stringsStack.pop();
        var repeatLength = Number(numberStack.pop());
        var resultStr = "";
        while (repeatLength > 0) {
            resultStr = repeatString + resultStr;
            repeatLength--;
        }
        stringsStack.push(resultStr);
    }
    return stringsStack.join("");
}
var ans1 = decodeString("100[leetcode]");
console.log("ans", ans1);
