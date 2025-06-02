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
const secondsInput = prompt("Nhập số giây:");
const seconds = parseFloat(secondsInput);

function convertSecondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600); // number 3
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;
  return `${String(hours).padStart(2, "0")} giờ : ${String(minutes).padStart(2, "0")} phút : ${String(secondsLeft).padStart(2, "0")} giấy`;
}

if (!isNaN(seconds) && seconds >= 0) { // phủ định của không => có synctax !(của cái gì đó)
  alert(
    `Kết quả sau khi chuyển đổi ${seconds} là: ${convertSecondsToTime(seconds)}`
  );
} else {
  alert("Vui lòng nhập một số nguyên không âm hợp lệ.");
}
