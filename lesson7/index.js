// // bài 1 tính tổng các số từ 1 đến 100
// let total = 0;
// for(let i = 1; i <= 100; i++) {
//   let digits = i.toString();
//   for(let j = 0; j < digits.length; j++) {
//     total += parseInt(digits[j]);
//   }
// }
// console.log(total)

// // bài 2 tìm các số nguyên tố từ 1 đến 100 chia hết cho 3 và 5
// for(let i = 1; i <= 100; i++) {
//   if(i % 3 == 0 && i % 5 == 0) {
//     console.log(`Số chia hết cho 3 và 5: ${i}`);
//   }
// }

// // bài 3 tính giai thừa của một số nguyên dương
// function tinhGiaiThua(n) {
//   if(n < 0) return "Không tính giai thừa cho số âm";
//   if(n === 0 || n === 1) return 1;
//   let result = 1;
//   for(let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// function tinhGiaiThuaDeQuy(n) {
//   if(n< 0) return "Không tính giai thừa cho số âm";
//   if(n === 0 || n === 1) return 1;
//   return n * tinhGiaiThuaDeQuy(n - 1);

// }

// console.log(tinhGiaiThua(5));
// console.log(tinhGiaiThuaDeQuy(5));

// // bài 4 in bảng cửu chương từ 2 đến 9
// for(let i = 2; i <= 9; i++) {
//   console.log(`\n Bảng cửu chương của ${i}`);
//   for(let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// // bài 5 đổi số nguyên dương sang dạng nhị phân
// function chuyenSangNhiPhan(n) {
//   if(n < 0) return "Không thể chuyển đổi số âm sang nhị phân";
//   if(n === 0) return "0";

//   let resultNhiPhan = '';
//   while(n > 0) {
//     resultNhiPhan = (n % 2) + resultNhiPhan;
//     n = Math.floor(n / 2);
//   }
//   return resultNhiPhan;
// }
// console.log(chuyenSangNhiPhan(10)); // 1010

// 3 trường hợp monday: làm bài ktra toán, tuesday: làm bài ktra văn, còn lại là không kiểm tra
const today = 'sunday'; // Thay đổi giá trị này để kiểm tra các trường hợp khác

// if(today === 'Monday') { // lớn hơn 10 và bé hơn 20
//   console.log('Làm bài kiểm tra toán');
// } else if(today === 'Tuesday') {
//   console.log('Làm bài kiểm tra văn');
// } else console.log("Không kiểm tra bài nào cả");

// switch(today) {
//   case 'Monday':
//     console.log('Hôm nay là thứ hai, làm bài kiểm tra toán');
//     break;
//   case 'Tuesday':
//     console.log('Hôm nay là thứ ba, làm bài kiểm tra văn');
//     break;
//   default:
//     console.log("Không kiểm tra bài nào cả");
//     break;
// }
// today === "Monday" ? console.log("thứ 2") : console.log("Không phải thứ 2");
