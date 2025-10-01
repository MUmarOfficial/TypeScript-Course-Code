"use strict";
let num = 10_12_34;
let num1 = 101234567895252478570n;
let num2 = 123.54;
console.log("num:", num);
console.log("num1:", num1);
console.log("num2:", num2);
let personName = "Umar";
let greeting = `Hello, ${personName}! Welcome to TypeScript.`;
console.log(greeting);
let isActive = true;
let isComplete = false;
console.log("isActive:", isActive);
console.log("isComplete:", isComplete);
let emptyValue = null;
let uninitializedValue;
console.log("emptyValue:", emptyValue);
console.log("uninitializedValue:", uninitializedValue);
let person = {
    name: "Umar",
    age: 30,
    isEmployed: true,
};
let student = {
    name: "Umar",
    age: 30,
    absence: true,
};
person = { ...person, gender: "male" };
let dynamicValue;
dynamicValue = 42;
dynamicValue = "Hello";
dynamicValue = true;
function ForAnyUnderstanding(params) {
    console.log(params);
}
let numArray = [1, 2, 3, 4, 5];
let strArray = ["apple", "banana", "cherry"];
let boolArray = [true, false, true];
numArray.push(6);
strArray.forEach((item) => {
    console.log(item.toUpperCase());
});
boolArray.map((item) => {
    console.log(item ? "Yes" : "No");
});
let tuple = ["Umar", 18, true];
let [name1, age1, isStudent1] = tuple;
console.log(`Name: ${name1}, Age: ${age1}, Is Student: ${isStudent1}`);
let coordinates = [10.5, 20.3];
let response = [200, "Success"];
var AppInfo;
(function (AppInfo) {
    AppInfo["AppName"] = "TypeScript Demo";
    AppInfo["Version"] = "1.0.0";
    AppInfo["Author"] = "Umar";
})(AppInfo || (AppInfo = {}));
;
console.log(`App Name: ${AppInfo.AppName}`);
console.log(`Version: ${AppInfo.Version}`);
console.log(`Author: ${AppInfo.Author}`);
let enumExample = AppInfo.AppName;
console.log("Enum Example:", enumExample);
//# sourceMappingURL=builtin-type.js.map