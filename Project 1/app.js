// ********** กำหนดตัวแปร ****************
/*var name = "joe";
console.log(name);
name = "Jonell";
console.log(name);
var fristname = "Chaiwat";
var lastName = "Butworn";
console.log(fristname);
console.log(lastName);
alert(fristname+lastName);
var age = 12
alert(typeof age)
console.log(10-5)
console.log(10/2)*/

// ************* โปรแกรมสุ่มเลข **************
/*let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ");
console.log("hello " + lotto_number);
console.log(Math.floor(Math.random() * 100));
if (parseInt(lotto_number) == Math.floor(Math.random() * 99 + 1)) {
  alert("คุณถูกรางวัล!🎉");
} else {
  alert("ไม่ถูกรางวัลรองวดหน้า😢");
}

document.getElementById("result").innerHTML = lotto_number*/

// ******************* เช็คข้อมูลค่าจริงเท็จ ******************
/*console.log(1 == 1) //true
console.log("1" == 1)  //true
console.log(1 == 2) //false
console.log("joe" === "joe") //true
console.log("joe" === 1) //false

console.log("4" != "4") //false
console.log("4" != "5") //true
console.log("joe" == "Joe")  //false
console.log("joe" !== "Joe") //true

console.log(10 > 5)  // true
console.log(10 >= 5) //true
console.log(5 <= 4) //false
console.log(10+10 <= 20)*/

//***********ใช้งานเงื่อนไข if else condition***************
/*let lotto_number = prompt("กรุณเลขที่ต้องการ");
let random_number = Math.floor(Math.random() * 100);
document.getElementById("random").innerHTML = random_number
if (lotto_number == random_number) {
  document.getElementById("result").innerHTML = "ยินดีด้วย!คุณถูกรางวัลเลข2ตัว"


}
else {
  document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล";
}/*end of code*/

//************Lecture 15 การใช้เงื่อนไขแบบซ้อนกัน********** */
/*let age = prompt("อายุของคุณ :")
if (age <= 12) {
  document.getElementById("text").innerHTML = "คุณเป็นเด็ก"
}
else if (age >= 13) {  
  document.getElementById("text").innerHTML = "คุณเป็นผู้ใหญ่"
}*/

//************** Lecture  16 โปรแกรมคำนวนเกรด****************** */

/*
let score = prompt("คะแนนของคุณ :")
if(score >= 80){
    document.getElementById("text").innerHTML = "คุณได้เกรด A"
}else if (score >= 70){ 
    document.getElementById("text").innerHTML = "คุณได้เกรด B"
}else if(score >= 60){
  document.getElementById("text").innerHTML = "คุณได้เกรด C"
}else if(score >= 50){  
  document.getElementById("text").innerHTML = "คุณได้เกรด D"
}else if (score >= 0 && score < 50 ){
  document.getElementById("text").innerHTML = " คุณได้เกรด F"
}
*/

//************* Lecture 18  เข้าใจการวนซ้ำใน JavaScript****************************

/*for(var counter = 0 ; counter < 5 ; counter++)
{
    alert("Please")
}
alert("Exit")
*/

//*************   Lecture 19 โปรเจค 4 : เครื่องคิดตังค่าอาหาร ********************************
/*let qrt = prompt("จำนวนของสินค้า")
let total = 0
for(var i = 1; i <= qrt; i++)
{
  let item_price = prompt("ราคาสินค้าต่อชิ้น :" +i)
  total = total + parseInt(item_price) 
  document.getElementById("price-list").innerHTML
   += "รายการสินค้าชิ้นที่" + i + "=" +item_price +"บาท"+"<br>";
}
document.getElementById("total").innerHTML
   = "ราคารวม =" +total+ "บาท";
   */

//************* Lecture 20 โปรเจคที่ 5 : ทายหัวก้อย******** */
/*let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?");
for (var i = 0; i < round; i++) {
  var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย");
  var random_answer = "";
  if (Math.floor(Math.random() * 10) <= 4) {
    random_answer = "หัว";
  } else {
    random_answer = "ก้อย";
  }
  if (answer == random_answer){
    alert("Correct !!");
  } else {
    alert("Invalid answer , please try again ");
  }
  console.log(random_answer+ "!" + answer);
}
*/

//************** Lecture 21 การวนซ้ำรูปแบบ while ***********
/*while (prompt("Please Exit") !== "Exit") {
  document.getElementById("result").innerHTML += "ไม่ได้พิพม์ Exit" + "<br>";
}*/

//************** Lecture 22  อะไรคือฟังก์ชัน แล้วฟังก์ชันมีไว้ทำอะไร *******
/*function sayHello() {
  alert("Hello World !");
}
sayHello()
*/

//************** Lecture 23 ใช้ฟังก์ชันพัฒนาเว็บไซต์ของเรา ***********
function toCelsius() {
  let fahrenheit = prompt("Fahrenheit:")
  let value =(fahrenheit - 32) / 9 * 5 
  document.getElementById("result").innerHTML=value.toFixed(2)+'°C';
}
toCelsius()

function toFahrenheit() {
  let celsius = prompt("Celsius:");
  let value = (celsius / 5) * 9 + 32;
  document.getElementById("result").innerHTML = value.toFixed(2) + "°F";
}
toFahrenheit()


//************** Lecture 24 การส่งค่ากลับของฟังก์ชัน   ******************
/*function sayHello()
{
    return "Hello"
}
function getAge()
{
  return 28
}
alert( sayHello())
alert( getAge())
*/

//****************** Lecture 25 การรับ และ ส่งค่าจากฟังก์ชัน ************
/*function sayHello(username ,userLastname) {
  return "Hello" +":" + username+ ""+" "+ userLastname ;
}
let userInput = prompt("Enter username : ")
let userLastNameInput = prompt("Enter lastname", userInput )
alert(sayHello(userInput, userLastNameInput))
*/

