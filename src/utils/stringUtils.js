// util function that forces capitalization on all inputs

export function forceCap(str) {
  if (str === "") {
    return "";
  }

  let returnStr = "";
  returnStr += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    let current = str[i];
    returnStr += current;
  }
  return returnStr;
}
