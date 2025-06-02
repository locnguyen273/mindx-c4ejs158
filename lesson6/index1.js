// function convertSecondsToTime(S) {
//   const hours = Math.floor(S / 3600);
//   const minutes = Math.floor((S % 3600) / 60);
//   const seconds = S % 60;

//   const formattedTime =
//     String(hours).padStart(2, "0") +
//     ":" +
//     String(minutes).padStart(2, "0") +
//     ":" +
//     String(seconds).padStart(2, "0");

//   return formattedTime;
// }

// const input = prompt("Nhập số giây:");
// const seconds = parseInt(input);

// if (!isNaN(seconds) && seconds >= 0) {
//   const result = convertSecondsToTime(seconds);
//   alert("Thời gian tương ứng là: " + result);
// } else {
//   alert("Vui lòng nhập một số nguyên không âm hợp lệ.");
// }


// function power(base, exponent) {
//   return Math.pow(base, exponent);
// }

// const baseInput = prompt("Nhập cơ số:");
// const base = parseFloat(baseInput);

// const exponentInput = prompt("Nhập số mũ:");
// const exponent = parseFloat(exponentInput);

// if (!isNaN(base) && !isNaN(exponent)) {
//   const result = power(base, exponent);
//   alert(`${base} ^ ${exponent} = ${result}`);
// } else {
//   alert("Vui lòng nhập số hợp lệ cho cả cơ số và số mũ.");
// }
