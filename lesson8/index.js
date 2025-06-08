// bài 1
const names1 = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// start với index = 0, , lấy vị trí cuối cùng array.length - 1
console.log("Vị trí đầu tiên trong mảng có giá trị là", names1[0])
console.log("Vị trí cuối cùng trong mảng có giá trị là", names1[names1.length - 1])

// bài 2
const names2 = ["John", "Jane", "Jim", "Jake"];
names2[2] = "Mary"
console.log("danh sách tên ban đầu:", names2);

// bài 3
const names3 = ["Alice", "", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i < names3.length; i++) {
  if (!!names3[i]) { // kiểm tra tên không rỗng thay vì viết như này names[i]!== "" || names[i] !== null || names[i] !== undefined
    console.log(`Tên ở vị trí ${i + 1} là: ${names3[i]}`);
  }
}

// bài 4
const names4 = ["Alice", "Bob", "Charlie", "David", "Eve"]; // thêm mindx vào cuối mảng key: push
names4.push("Mindx");
console.log("Mảng sau khi thêm tên mới:", names4);

// bài 5
const numbersFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soLeCount = [];
for (let i = 0; i < numbersFive.length; i++) {
  if (numbersFive[i] % 2 === 1) {
    soLeCount.push(numbersFive[i]);
    // console.log(`Số lẻ tại vị trí ${i + 1} là: ${numbersFive[i]}`);
  }
  console.log("số lẻ trong mảng là:", soLeCount);
}

// bài 6
const nameSixArr = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
// const nameExisted = nameSixArr.includes("David");
const nameExisted = nameSixArr.indexOf("David") !== -1; // kiểm tra xem "David" có trong mảng hay không
nameExisted ? console.log("David đã tồn tại trong mảng") : console.log("David không tồn tại trong mảng");

// bài 7
const numberSevenArr = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2, 4, 2, 5, 6, 7, 8, 9, 10];
const targetCounting = 2;

const listFilterNumber = numberSevenArr.filter((item) => item === targetCounting);
console.log(`Số ${targetCounting} xuất hiện ${listFilterNumber.length} lần trong mảng`);

// bài 8
const numberEightArr = [5, 2, 9, 3, 7, 11, 8];
const maxNumber = Math.max(...numberEightArr);
console.log(`Số lớn nhất trong mảng là: ${maxNumber}`);

// bài 9
const numberNineArr = [5, 2, 9, 3, 7, 11, 8];

const listNumberReverse = numberNineArr.reverse();
console.log("Mảng sau khi đảo ngược:", listNumberReverse);

// bài 10
const numberTenArr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArrNumber = [...new Set(numberTenArr)];
console.log("Mảng sau khi loại bỏ các phần tử trùng lặp:", uniqueArrNumber);

// bài 11
const numberElevenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numberElevenArr.reduce((total, value) => total + value , 0);
console.log("Tổng của các phần tử trong mảng là:", sum);