// lessison 1: tính diện tích hình chữ nhật
// let width = +prompt("giá trị độ rộng");
// let height = +prompt("giá trị độ cao");
// let area = ((width + height) * 2);
// console.log(area);


// lessison 2:Tính tổng 2 số bất kì 
// let fristNumber = +prompt("số thứ nhất");
// let sencondNumber = +prompt("số thứ 2");
// alert =(fristNumber + sencondNumber);
// console.log(alert);


//lession 3:Chuyển đổi tiền tệ
// let usd = prompt(" nhập số tiền USD:");
// let vnd = usd * 25000;
// alert = vnd;
// console.log(alert);


// lession 4: Tính điểm trung bình
// let math = +prompt("nhập điểm môn toán");
// let physics = +prompt("nhập điểm môn vật lý");
// let chemistry = +prompt("nhập điểm môn hóa học");
// alert =(( math + physics + chemistry) / 3);
// console.log(alert);

//lessison 5: Chuyển đổi nhiệt độ
// let temperatureC = prompt(" nhập nhiệt độ C");
// let temperatureF = ((temperatureC*9/5) + 32);
// alert = temperatureF;
// console.log(alert);


//lessison 6: Chuyển đổi case chữ
// let angry = "phạm thị lan hồng";
// let angryUpperCase = angry.toUpperCase();
// console.log(angryUpperCase);

// let hoTen = "lê minh huyền";
// let hoTenUpperCase = hoTen.toUpperCase();
// console.log(hoTenUpperCase);


//lessison 7:Sử dụng đối tượng Math Object
// let so = prompt("nhập một số bất kỳ:");
// let canBacHai = Math.sqrt(so);
// console.log(canBacHai);


//lessison 8:Sử dụng đối tượng math object
let squareRoot = prompt("Nhập 1 số bất kì");
console.log(Math.sqrt(squareRoot));

//lessison 9:
// let soTien = prompt("nhập số tiền:");
// let moneyVnd = Number(soTien).toLocaleString('vi-VN') +" VND";
// console.log(moneyVnd);

//lessison 11: Luyện tập Math object
//Sử dụng hàm Math.abs():
// console.log(Math.abs(-5.5)); //Kết quả:5.5 vì trả về giá trị tuyệt đối
// console.log(Math.abs(10)); //Kết quả:10 vì 10 là số dương
// //Sử dụng hàm Math.ceil():
// console.log(4.4); //Kết quả: 5 vì làm tròn lên số nguyên gần nhất 
// console.log(5.8); //Kết quả: 6 
// //Sử dụng hàm Math.floor():
// console.log(5.7); //Kết quả: 5 vì làm tròn xuống số nguyên gần nhất
// console.log(6.1); //Kết quả: 6 
// //Sử dụng hàm Math.round():
// console.log(10.1); //Kết quả: 10 vì làm tròn đến số nguyên gần nhất
// console.log(20.6);//Kết quả: 21 vì 0.6 > 0.5 nên làm tròn lên


//lessison 12:Tính tiền lãi gửi ngân hàng
// let depositAmount = +prompt("Nhập số tiền gửi");
// let numberOfmonths = +prompt("Nhập vào số tháng gửi");
// let interestAmount =  (depositAmount*4.3 / 12 ) * numberOfmonths;
// console.log(interestAmount);