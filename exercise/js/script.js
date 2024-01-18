let getEx1 = function (str) {
  console.log(str);
};
getEx1("Hello world");

let getEx2 = function (a, b) {
  console.log(`Tổng giá trị của  a và b = ${a + b}`);
};
getEx2(5, 10);

let getEx3 = function (a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log(`Giá trị lớn nhất trong 3 số là: ${max}`);
};

getEx3(5, 2, 9);

let getEx4 = function logN(n) {
  if (n > 0) {
    console.log(n);
    return logN(n - 1);
  }
};

getEx4(100);
let fact = 1;
let getEx5 = function a(n) {
  if (n > 0) {
    fact *= n;

    return a(n - 1);
  }
  console.log(fact);
};
getEx5(10);

let getEx6 = function print(n) {
  if (n > 0) {
    console.log(n);
    return print(n - 2);
  }
};

getEx6(100);

let getEx7 = function (n) {
  let check = true;
  if (n === 1) {
    console.log(`${n} không phải số nguyên tố`);
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        check = false;
      }
    }
    if (check) {
      console.log(`${n} là số nguyên tố`);
    } else {
      console.log(`${n} không là số nguyên tố`);
    }
  }
};
getEx7(6);

let getEx8 = function () {
  let arr = [4, 2, 7, 9, 5];
  let min = arr[0];
  for (var index in arr) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  console.log(`Giá trị nhỏ nhát của mảng là: ${min}`);
};

getEx8();

let getEx9 = function (n) {
  let count = 0;
  let arr = [5, 4, 7, 9, 2, 8, 2];
  let local = [];
  for (var i in arr) {
    if (arr[i] === n) {
      local.push(i);
      count++;
    }
  }
  console.log(`Vị trí của ${n} là ${local}`);
  if (count === 0) {
    console.log(`Không tìm thấy giá trị nào trong mảng`);
  }
};
getEx9(2);
