// const a = 3; // number
// const b = 3;

// // let result = 0;
// // result = a + b;
// // result = a - b;
// // result = a * b;
// // result = a / b;
// // console.log("result", result);

// // so sánh bằng ==, so sánh khác !=
// // if (a % 2 == 0) {
// //   console.log(`a có giá trị bằng ${a} là số chẵn`);
// // }

// // if (a % 2 != 0) {
// //   console.log(`a có giá trị bằng ${a} là số lẻ`);
// // }

// // a chạy từ 0 đến 10
// // nếu a = 0 thì a+= b là 3
// // nếu a = 1 thì a+= b là 4  =3 + 1

// const firstName = "Nguyễn";
// const lastName = "Văn A";
// const age = 18;
// const address = "Hà Nội";

// console.log("Họ và tên:" + firstName + " " + lastName + ", tuổi: " + age + ", địa chỉ: " + address);
// console.log(`Họ và tên: ${firstName} ${lastName}, tuổi : ${age}, địa chỉ: ${address}`);

// let x = 10; // number
// let y = "10"; // string

// console.log(x == y);  // true (chỉ so sánh giá trị - hoặc gọi đơn giản là hình thức)
// console.log(x === y); // false (so sánh cả giá trị và kiểu dữ liệu)
// console.log(x > 5);

//bài 1
// const widthInput = prompt("Nhập chiều rộng hình chữ nhật:");
// const width = parseInt(widthInput);
// const lengthInput = prompt("Nhập chiều dài hình chữ nhật:");
// const length = parseInt(lengthInput);

// function calculateRectanglePerimeter(width, length) {
//   // trả về phép tính
//   return (length + width) * 2;
// }

// function calculateRectangleArea(width, length) {
//   // trả về phép tính
//   return length * width;
// }

// if (!isNaN(width) && !isNaN(length) && width > 0 && length > 0) {
//   const resultPerimeter = calculateRectanglePerimeter(width, length);
//   const resultArea = calculateRectangleArea(width, length);
//   alert(
//     `Chiều dài: ${length},Chiều rộng: ${width}, Có chu vi là: ${resultPerimeter}, Diện tích là: ${resultArea}`
//   );
// } else {
//   alert("Vui lòng nhập chiều dài và chiều rộng hợp lệ (số nguyên dương).");
// }

// bài 2
// const secondsInput = prompt("Nhập số giây:");
// const seconds = parseFloat(secondsInput);

// function convertSecondsToTime(seconds) {
//   const hours = Math.floor(seconds / 3600); // number 3
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const secondsLeft = seconds % 60;
//   return `${String(hours).padStart(2, "0")} giờ : ${String(minutes).padStart(2, "0")} phút : ${String(secondsLeft).padStart(2, "0")} giấy`;
// }

// if (!isNaN(seconds) && seconds >= 0) { // phủ định của không => có synctax !(của cái gì đó)
//   alert(
//     `Kết quả sau khi chuyển đổi ${seconds} là: ${convertSecondsToTime(seconds)}`
//   );
// } else {
//   alert("Vui lòng nhập một số nguyên không âm hợp lệ.");
// }

// bài 3
// const base = prompt("Nhập cơ số:");
// const baseInput = parseFloat(base);
// const exponent = prompt("Nhập số mũ:");
// const exponentInput = parseFloat(exponent);

// const result = Math.pow(base, exponent);
// if (!isNaN(baseInput) && !isNaN(exponentInput)) {
//   alert(`kết quả tính lũy thừa của ${base} ^ ${exponent} = ${result}`);
// }

// bài 4 tính trung bình cộng
function calculateAverage() {
  const numberOne = parseFloat(document.getElementById("numberOne").value);
  const numberTwo = parseFloat(document.getElementById("numberTwo").value);
  const numberThree = parseFloat(document.getElementById("numberThree").value);
  const average = (numberOne + numberTwo + numberThree) / 3;
  document.getElementById("result").innerText = `Trung bình là: ${average}`;
}

// bài 5 tính khoảng cách giữa 2 điểm
function calculateDistance() {
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);

  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  document.getElementById(
    "resultDistance"
  ).innerText = `Khoảng cách giữa hai điểm là: ${distance}`;
}

// bài 6 so sánh số lớn nhất trong 3 số user nhập vào
// const numberOneInput = parseFloat(prompt("Nhập số thứ nhất:"));
// const numberTwoInput = parseFloat(prompt("Nhập số thứ hai:"));
// const numberThreeInput = parseFloat(prompt("Nhập số thứ ba:"));

// const isFirstLargest = numberOneInput > numberTwoInput && numberOneInput > numberThreeInput;
// if (
//   !isNaN(numberOneInput) &&
//   !isNaN(numberTwoInput) &&
//   !isNaN(numberThreeInput)
// ) {
//   if (isFirstLargest) {
//     alert(`Số thứ nhất là lớn nhất: ${isFirstLargest}`);
//   } else alert(`Số thứ nhất là lớn nhất: ${isFirstLargest}`);
// }

// bài 7
// const input1 = prompt("Nhập giá trị thứ nhất:");
// const input2 = prompt("Nhập giá trị thứ hai:");

// const  isEqual = input1 === input2;

// alert(`Hai giá trị giống nhau: ${isEqual}`);

// bài 8 check số nguyên dương
// const numberIsPositive = prompt("Nhập một số bất kỳ:");
// const numberIsPositiveInput = parseFloat(numberIsPositive);

// const isPositiveChecked = number > 0;
// alert(`Số vừa nhập là số dương: ${isPositiveChecked}`);

// bài 9 check leap year
function checkLeapYear() {
  const year = parseInt(document.getElementById("yearInput").value);
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  document.getElementById("resultLeapYear").innerText =
    year + (isLeap ? " là năm nhuận" : " không phải là năm nhuận");
}

// bài 10 so sánh thời gian
const hourOne = parseInt(prompt("Nhập giờ của thời gian thứ nhất (0-23):"));
const minuteOne = parseInt(prompt("Nhập phút của thời gian thứ nhất (0-59):"));

const hourTwo = parseInt(prompt("Nhập giờ của thời gian thứ hai (0-23):"));
const minuteTwo = parseInt(prompt("Nhập phút của thời gian thứ hai (0-59):"));

// Chuyển đổi sang tổng số phút
const totalMinutesOne = hourOne * 60 + minuteOne;
const totalMinutesTwo = hourTwo * 60 + minuteTwo;

const isLater = totalMinutesOne > totalMinutesTwo;

alert(`Thời gian thứ nhất muộn hơn thời gian thứ hai: ${isLater}`);
