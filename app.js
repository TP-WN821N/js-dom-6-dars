// 104
function sumObjectValues(obj) {
  let result = 0
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] === "object") {
        arr.push({ value: value[key] })
      } else if (typeof value[key] === "number") {
        result += value[key]
      }
    }
  }
  return result
}

// Test case
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};
// console.log(sumObjectValues(obj));
// Output: 6



// 105
function rotateArrayLeft(arr = [], n) {
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop())
  }
  return arr
}

// Test case
// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
// Output: [3, 4, 5, 1, 2]




// 106
function removeDigits(str = '') {
  let arr = str.split("")
  let result = arr.filter(item => isNaN(item))
  return result.join("")
}

// Test case
// console.log(removeDigits("abc123def456"));
// Output: "abcdef"



// 107
function oddIndexedElements(arr = []) {
  let new_arr = arr.filter((item, i) => i % 2 == 1)
  return new_arr
}

// Test case
// console.log(oddIndexedElements([1, 2, 3, 4, 5, 6]));
// Output: [2, 4, 6]




// 108
function doubleValues(obj) {
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] === "object") {
        arr.push({ value: value[key] })
      } else if (typeof value[key] === "number") {
        value[key] *= 2
      }
    }
  }
  return obj
}

// Test case
const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};
// console.log(doubleValues(obj2));
// Output: { a: 2, b: { c: 4, d: { e: 6 } } }



function objectToArray(obj = {}) {
  let result = []
  for (let key in obj) {
    result.push([key, obj[key]])
  }
  return result
}

// Test case
const obj3 = {
  a: 1,
  b: 2,
  c: 3
};
// console.log(objectToArray(obj3));
// Output: [["a", 1], ["b", 2], ["c", 3]]



// 110
function sortKeysByValue(obj) {
  let arr = []
  let new_obj = {}
  for (let key in obj) {
    arr.push([key, obj[key]])
  }
  arr.sort((a, b) => a[1] - b[1])
  for (let item of arr) {
    new_obj[item[0]] = item[1]
  }
  return new_obj
}

// Test case
const obj4 = {
  a: 3,
  b: 1,
  c: 2
};
// console.log(sortKeysByValue(obj4));
// Output: { b: 1, c: 2, a: 3 }