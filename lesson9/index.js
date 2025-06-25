const object = {
  name: "John",
  age: 24,
  address: "123 Main St",
  hobbies: ["reading", "gaming", "hiking"],
};
// const { name, age, address } = object; // Destructuring assignment
// console.log(name, age, address);
// console.log(object['name'], object['age'], object['address']); // Accessing properties using bracket notation

// console.log("object trước khi gán value", object);
// object.name = 'Jane'; // Updating property value
// delete object.name;
// object.fieldName = "new value"; // Adding a new property
// console.log("object sau khi gán value", object);

// for(let key in object) {
//   console.log(`Key: ${key}, Value: ${object[key]}`);
// }

const techProducts = [
  {
    name: "Laptop Dell XPS 13",
    price: 1500,
    description:
      "Laptop mỏng nhẹ với màn hình 13.4 inch, vi xử lý Intel Core i7 thế hệ 11 và ổ cứng SSD 512GB.",
    quantity: 10,
  },
  {
    name: "Apple iPhone 13 Pro",
    price: 1200,
    description:
      "Điện thoại iPhone 13 Pro với màn hình Super Retina XDR 6.1 inch, chip A15 Bionic và hệ thống camera ba ống kính.",
    quantity: 25,
  },
  {
    name: "Tai nghe Sony WH-1000XM4",
    price: 350,
    description:
      "Tai nghe chống ồn chủ động cao cấp từ Sony, với thời lượng pin lên đến 30 giờ và khả năng kết nối không dây Bluetooth.",
    quantity: 15,
  },
  {
    name: "Apple Watch Series 7",
    price: 500,
    description:
      "Đồng hồ thông minh với màn hình lớn hơn, chống nước và theo dõi sức khỏe toàn diện.",
    quantity: 30,
  },
  {
    name: "Máy tính bảng Samsung Galaxy Tab S7",
    price: 700,
    description:
      "Máy tính bảng với màn hình 11 inch, hỗ trợ bút S Pen, chạy hệ điều hành Android 11.",
    quantity: 20,
  },
  {
    name: "Loa thông minh Google Nest Audio",
    price: 100,
    description:
      "Loa thông minh tích hợp trợ lý ảo Google Assistant, âm thanh sống động và kết nối với hệ thống nhà thông minh.",
    quantity: 50,
  },
  {
    name: "Camera GoPro HERO9",
    price: 450,
    description:
      "Camera hành trình GoPro HERO9 với khả năng quay video 5K, chống nước và ổn định hình ảnh mạnh mẽ.",
    quantity: 12,
  },
  {
    name: "Bàn phím cơ Keychron K2",
    price: 80,
    description:
      "Bàn phím cơ không dây với layout 75%, hỗ trợ kết nối đa thiết bị và các phím chuyển đổi Mac/Windows.",
    quantity: 40,
  },
];

localStorage.setItem("cart",JSON.stringify(techProducts))

const namesList = document.getElementById("namesList");
// thêm id cho mỗi object sp id = name + price
const data = JSON.parse(localStorage.getItem("cart"));
console.log("data", data)
const updateListProducts = data?.map((product) => {
  const li = document.createElement("p");
  li.textContent = product.name;
  namesList.appendChild(li);
  // console.log("product", product);
  // return {
  //   ...product,
  //   id: `${product.name.replace(/\s+/g, '')}-${product.price}`,
  // }
});

// console.log("updateListProducts", updateListProducts);

// bài 1
const objectOne = {
  name: "Alice",
  age: 30,
  major: "Computer Science",
};
objectOne.address = "456 Elm St";
console.log("first object", objectOne);

// bài 2
const person = { name: "Alice", age: 25, job: "Designer" };
delete person.job;
console.log("second object", person);

// bài 3
const car = { brand: "Toyota", model: "Camry", year: 2020 };
console.log("count length of car object", Object.keys(car).length); // Sử dụng Object.keys() để lấy mảng các key và tính độ dài của nó

// bài 4
const product = { name: "Laptop", price: 1000 };
console.log("danh sách các key của product object", Object.entries(product)); // Sử dụng Object.keys() để lấy danh sách các key của object

// bài 5
const products = [
  { name: undefined, price: 500 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 },
];
const existedProduct = products.filter(
  (item) => item.name?.toLowerCase() == "camera"
);
console.log(existedProduct ? "Sản phẩm đã tồn tại" : "Sản phẩm không tồn tại");

// bài 6
const productList = [
  { name: "Phone", price: 50 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 },
];
const productExists = productList.filter((item) => item.price > 100);
console.log(productExists);
