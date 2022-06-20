alert('Hello world!');
//String type Data type Example
var a = " Let's have a cup of tea.";
var b = ' I love Bangladesh.';
var c = ' I live at Chittagong';
console.log("This is string Data type Example :");
console.log(a);
console.log(b);
console.log(c);

// Javascript Number type Data Example

var a1 = 25; //integer value
var b1 = 80.5; // floating-point number
var c1 = 4.25e+6; // exponential notation, same as 4.25e or 4250000
var d1 = 4.25e-6; // exponential notation, same as 0.00000425

console.log(" This is Number Data Example :");
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);

// Javascript Boolean Data Type Example

var a2 = 2, b2 = 5, c2 = 10, d2 = 20;

console.log(" This is Boolean type Data Example :");
console.log(a2>b2);
console.log(b2>a2);
console.log(b2>c2);
console.log(b2<c2);
console.log(c2>d2);
console.log(d2>c2);


// Javascript Undefined Data type 

var a3;
var b3 = "Hello World!!";

console.log(" This is undefined Data type Example : ");
console.log(a3);
console.log(b3);

// javascript Null Data Type 

var a4 = null;
var b4 = "Ornat shaon";

console.log(" This is Null Data type Example : ");
console.log(a4);
console.log(b4);

// Javascript Object Data type 

var car = {
    "Modal" : " BMW 7 Series 2022",
    "Color" : " Evergreen Fog SW 9130",
    "doors" : 5,
    "Security" :  "Bomb-blast-resistant doors and frames ,Bulletproof,run-flat tires, night-vision devices, smoke screens, and oil slicks"

}

console.log(" This is Object Data type Example :");
console.log(car);

// Javascript BigInt Data type 

//parameter in decimal format 

var bigNum = BigInt("12345666666666666666666666666666666666666");
console.log(" This is Parameter in Decimal format[BigInt Data type] Example :");
console.log(bigNum);

// Parameter in hexadecimal format

var bigHex = BigInt("0x1ffffffeeeeeeeeef");
console.log(" This is Parameter in hexadecimal format[BigInt Data type] Example :");
console.log(bigHex);

// Parameter in binary format

var bigBin = BigInt(
    "0b1010101001010101001111111111111111");
  console.log(" This is Parameter in binary format[BigInt Data type] Example :");
  console.log(bigBin);


// Javascript Symbol ID data type

let id = Symbol("id");
let user = {
  [id]: 12345
};

let clone = Object.assign({}, user);
console.log(" This is Symbol ID data type");
console.log( clone[id] );

// Javascript Array Data Type 

var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
 
console.log(" This is Array type Data Example :")
console.log(colors[0]);   // Output: Red
console.log(cities[2]);   // Output: New York

// Javascript Array Data type 

var colors = ["Red","Yellow","Green","Orange"];
var cities = ["London","Paris","New York","Dhaka","Chottogram"];

console.log(" This is Array type Data Example : ");
console.log(colors[0]);
console.log(cities[4]);
console.log(colors[2]);
console.log(cities[3]);
console.log(colors[1]);
console.log(cities[0]);

// Javascript Function data type 

function createGreeting(name){
  return "Hello, " + name;
}
function displayGreeting(greetingFunction, userName){
  return greetingFunction(userName);
}

var result = displayGreeting(createGreeting, "Peter");
console.log(" This is Function data type Example : ");
console.log(result); // Output: Hello, Peter

// Document.Written Method writing

document.write('<h4><b>Document.written Method with Table Inserting HTML Content with JavaScript</b></h4>');

document.write('<table border="1">');
 document.write('<tr>');
   document.write('<th>');
    document.write('S.no');
   document.write('</th>');

   document.write('<th>');
    document.write('Name');
   document.write('</th>');

   document.write('<th>');
    document.write('Contact Number');
   document.write('</th>');

   document.write('<th>');
     document.write('Address');
   document.write('</th>');
 document.write('</tr>');

  document.write('<tr>');
   document.write('<td>');
    document.write('01');
   document.write('</td>');

   document.write('<td>');
    document.write('Tahmid Chowdhury');
   document.write('</td>');

   document.write('<td>');
    document.write('+8801566666');
   document.write('</td>');

   document.write('<td>');
    document.write('chittagong');
   document.write('</td>');
  document.write('</tr>');

  document.write('<tr>');
   document.write('<td>');
    document.write('02');
   document.write('</td>');

   document.write('<td>');
    document.write('Ornat Shaon');
   document.write('</td>');

   document.write('<td>');
    document.write('+8801666666');
   document.write('</td>');

   document.write('<td>');
    document.write('chittagong');
   document.write('</td>');
  document.write('</tr>');

  document.write('<tr>');
   document.write('<td>');
    document.write('03');
   document.write('</td>');

   document.write('<td>');
    document.write('Mahin');
   document.write('</td>');

   document.write('<td>');
    document.write('+8801566666');
   document.write('</td>');

   document.write('<td>');
    document.write('chittagong');
   document.write('</td>');
  document.write('</tr>');

document.write('</table>');
document.write('<br/>');

document.write('<b>Ins and outs variable of the javascript example below    </b> ');
document.write('<br/>');

var car1 = 'BMW 7 Series Model';
var car2 = 'Color: minty teal green'
document.write(car1);
document.write('</br>');
  document.write(car2);
document.write('</br>');
 var math1 = 45+60;
 document.write(math1);
document.write('</br>');
 var math2 = 45+60+20+30+80/7;
 document.write(math2);
document.write('</br>');
document.write(' pop ups in detail');
document.write('</br>');
var name5 = prompt('Enter Your Name?');
var name6 = prompt('Where are you from?');
document.write('Hello Mr./Mis./miss.'+ name5 + '</br>You are from:' + name6);
document.write('</br>');
document.write('<b>Mathematical Operators Testing</b> ');

var A = 27;
var B = 96;
document.write('</br>');
document.write('Sum operator [A=27,B=96,A+B=?]');
document.write('</br>');
document.write(A+B);
document.write('<br>');
document.write('Subtraction operator [A=27,B=96,A-B=?]');
document.write('</br>');
document.write(A-B);
document.write('</br>');
document.write('Multiplication operator [A=27,B=96,A*B=?]');
document.write('</br>');
document.write(A*B);
document.write('</br>');
document.write(' Division operator [A=27,B=96,A/B=?]');
document.write('</br>');
document.write(A/B);
document.write('</br>');
document.write('Modulus operator [A=27,B=96,A%B=?]');
document.write('<br>');
document.write(A%B);
document.write('</br>');
document.write('increase operator [++A=?,++B=?]');
document.write('</br>');
document.write(++A);
document.write('<br>');
document.write(++B);
document.write('</br>');
document.write('Decreases operator [--A=?,--B=?]');
document.write('<br>');
document.write(--A);
document.write('</br>');
document.write(--B);
document.write('</br>');
document.write('<b>Assigning operator</b>');
document.write('</br>');

var A1 = 98;
var B1 = 22;

document.write('Assigning sum operator');
document.write('<br>');
A1 += B1;
document.write(A1);
document.write('</br>');
document.write('Assigning Subtraction operator');
document.write('<br>');
A1 -= B1;
document.write(A1);
document.write('</br>');
document.write('Assigning Multiplication operator');
document.write('<br>');
A1 *= B1;
document.write(A1);
document.write('</br>');
document.write('Assigning Division operator');
document.write('<br>');
A1 /= B1;
document.write(A1);
document.write('</br>');
document.write('Assigning modulus operator');
document.write('</br>');
A1 %= B1;
document.write(A1);
document.write('</br>');
document.write('<b>If statement and comparison operators</b> ');
document.write('</br>');

var A2 = 50;
var B2 = 45;

document.write('</br>');

if( A2 == B2 ) {
  document.write(' The Number is Equal');
}else{
  document.write(' The Number is not equal');
}
document.write('</br>');

if(A2>B2){
  document.write('A2 number is Bigger than B2 number');
}else{
  document.write('A2 number is smaller than B2 number');
}
document.write('</br>');

var A3 = 50;
var B3 = 50;

document.write('</br>');

if(A3>=B3){
  document.write(' Here A3 value is Bigger than B3 number or equal to A3 number');
}else{
  document.write('A3 value is smaller than B3 number or not equal the number');
}
document.write('</br>');

var A4 = 50;
var B4 = 48;

document.write('</br>');

if(A4 != B4){
  document.write('IN here A4 and B4 are not Equal');
}else{
  document.write('In here A4 and B4 Value are equal');
}

document.write('</br>');

if('50' === '50'){
  document.write(' This Condition are true [50 === 50]');
}else{
  document.write(' This Condition are false [50 === 50]');
}
document.write('</br>');

document.write('<b> Logical Operators </b>');
document.write('</br>');

if( 9==9 || 9== 8){
  document.write('this [Are] logical operator are true 9==9 || 9==8 because one condition are true');
}else{
  document.write('The logical operator are false 9==9 || 9==8');
}

document.write('</br>');

if( 5==5 && 5==6){
  document.write('This [And] [5==5 && 5==6] operator is true]');
}else{
  document.write('This [And] [5==5 && 5==6] operator is False because here one condition are not true]');
}
document.write('</br>');

if(!(9==5)){
  document.write(' This Condition are true [!(9==5)]');
}else{
  document.write(' This condition are false[!(9==5)]');
}
document.write('</br>');

document.write('<b> If Else Condition</b>');
document.write('</br>');

var A5 = 50;
var B5 = 50;
var C5 = A5 * B5;
var D5 = C5 + 500;

if(D5>=3000){
  document.write('This result are true D5 = 3000');
}else{
  document.write(' This result are False D5 = 3000');
}

document.write('</br>');
document.write('<b>If Else Statement testing </b>');
document.write('<br/>');

var R1 = 66;
var R2 = 78;

if(R1 === R2) {
  document.write('R1 & R2 Value are Equal');
}else{
  document.write(' R1 & R2 Value are not Equal');
}

document.write('</br>');
document.write('<b>Nested If Else Testing</b>');
document.write('</br>');

let sum = 35;
if (sum % 10 == 0){
    console.log("a");
} else if (sum % 2 == 1){
    if (sum % 5 == 0 && sum % 2 == 0){
        console.log("b");
    } else if (sum % 5 == 0){
        console.log("c")
    } else {
        console.log("d")
    }
} else {
    console.log("e")
}

document.write('</br>');

var shop = 'star tech';
var Buy = 'Computer and computer accessories';

if( shop == 'star tech'){
  document.write('Welcome to the star tech Family');
}else if( shop == 'x shop'){
  document.write('Sorry we are star Tech!,you can try new experience with the star tech family');
}if( Buy == 'Computer and computer accessories'){
  document.write('</br>You can buy latest computer & computer accessories');
}else{
  document.write('Sorry ! This is Computer shop');
}

document.write('</br>');

var R3 = 50;
var R4 = 60;
var R5 = 70;
var R6 = 80;

document.write('R3 = 50,R4=60;R5=70,R6=80');
document.write('</br>');

if(R3>=R4){
  document.write('R3 value is greater or equal to R4 value');
}else if(R3>=R5){
  document.write('R3 value is greater or equal to R5 value');
}else if(R3<=R6){
  document.write('R3 value is greater or equal to R6 value');
}else{
  document.write('R3 value is smaller than R4,R5,R6 value');
}if(R4<=R5){
  document.write('</br>R4 value is greater or equal to R5 value');
}else if(R4<=R6){
  document.write('</br>R4 value is greater or equal to R6 value');
}if(R5>=R6){
  document.write('</br> R5 value is greater or equal to R6 value');
}else if(R5<=R6){
  document.write('</br> R5 value is smaller than R6 value');
}else{
  document.write('R6 value is greater than all value');
}
document.write('</br>');
document.write('<b> switch Method in javascript</b>')
document.write('</br>');

var CTG1 = 'Agrabad';
switch (CTG1){
  case 'Patiya': document.write('This is sub-district in CTG');
  break;

  case 'New market': document.write('</br>This is shopping place in CTG');
  break;

  case 'Agrabad': document.write('</br><b>Agrabad</b> This is a downtown commercial and financial area in Chittagong');
  break;

  default : document.write('</br>This is default value');
}

document.write('</br>');

document.write('<b> For Loop javascript</b>');
document.write('</br>');

for(a =1; a<=10;a++){
  document.write(a+'. This is for Loop Condition testing</br>');
}

document.write('</br>');
document.write('<b>While Loop condition & Do While Loop Condition testing   </b></br>');

var Q1 = 1;
while( Q1<=10){
  document.write(Q1+'. This is while loop condition</br>');
  Q1++;
}
var Q2 = 1;
do{
  document.write(Q2+'. This is Do while loop condition</br>');
  Q2++;
}while(Q2<=10);

document.write('</br>');

document.write('<b> Create a simple function [1]</b></br>');

function func1(){
  document.write('This is first simple function test</br>');
}
func1();
document.write('</br>');

function func2(){
  alert('This alert come from second simple function test');
}
document.write('</br>');

document.write(' Function test sending parameters</br>');

function func4(x){
  document.write('Hello Mr.' + x + ' Welcome to our website');
}
func4('Tahmid');
document.write('</br>');

function func5(a,x){
  document.write('Hello '+a+'' +x+ ' i hope you are okay</br>');
}
func5('Mr.','Rahim');
func5('Miss.','Tahmina');
func5('Mrs.','Razia');

document.write('</br>');

document.write('<b>Break and continue statement testing</b></br>');
document.write('Break statement testing</br>');
for(x =1;x<=10;x++){
  document.write(x+'. This Line are Come form break statement</br>');
  if(x==6){
    break;
  }
}
document.write('</br>');

document.write( ' Continue statement testing</br>');
for(y=1;y<=12;y++){
  if(y==5){
    continue;
  }
  document.write(y+'. This line are come from continue statement</br>');
}

document.write('</br>');

document.write('<b>Local and Global variable testing</b></br>');
function str_func(){
  shah = 'Shazib kamal';
  lrr ='Larry';
  str = 'Learn with '+shah+' and '+lrr+ '  This is Global variable';
  document.write(str);
}
str_func();
document.write('</br>');

function funLocal(){
  var localVar = 101;
  document.write('Local Variable value is : '+localVar+'</br>');
}
funLocal();

document.write('</br>');
document.write('Local variable having same name as global variable.');
document.write('</br>');

var empName = 'Kevin';
function showEnp(){
  var empName = 'Tahmid';
  document.write('Employee name with Local variable :' ,empName +'</br>');
}
showEnp();
document.write('Employee name with Global variable :' ,empName +'</br>');

document.write('</br>');

document.write('<b>String Function testing</b></br>');

const ornet1 = 'Javascript is a most popular scripting language';
const ornet2 = ' And Java is popular language since 1995';
const ornet3 = '     Also python is now most popular language';
const ornet4 = 'C# IS HIGH LEVEL PROGRAMMING LANGUAGE';

// concatenation two string 
const result1 = ornet1.concat(' ',ornet2);
document.write(result1);
document.write('</br>');

// Converting string to upper case
const result2 = ornet2.toUpperCase();
document.write(result2);
document.write('</br>');

//removing whitespace from the string
const result3 = ornet3.trim();
document.write(result3);
document.write('</br>');

//converting string to lower case 
const result4 = ornet4.toLowerCase();
document.write(result4);
document.write('</br>');

//converting string to an array
const result5 = ornet1.split();
document.write(result5);
document.write('</br>');

//slice string
const result6 = ornet2.slice(0,5);
document.write(result6);
document.write('</br>');

// Array Function data type
document.write('<b>Array Function testing</b></br>');

var computers = ['Apple Computer','Dell Computer','Hp computer','Toshiba Computer','Asus Computer','Lenovo Computer','Acer Computer','Sony Computer','Samsung Computer','LG Computer','Panasonic Computer','Vizio Computer','Philips Computer','Htc Computer','Motorola Computer','Htc Computer','Motorola Computer'];

document.write(computers[12]);
document.write('</br>');
document.write(computers[1]);
document.write('</br>');

var people = ['Tahmid','Ornat','sakib','Mahin','Allauddin'];
document.write(people[2]);
document.write('</br>');
people[2] = 'Ratul';
document.write(people[2]);
document.write('</br>');

// input array value in fruits

var fruits =[];
fruits[0] = 'Apple';
fruits[1] = 'Banana';
fruits[2] = 'Orange';
fruits[3] = 'Mango';
fruits[4] = 'Pineapple';
fruits[5] = 'Strawberry';
fruits[6] = 'Watermelon';
fruits[7] = 'Guava';
fruits[8] = 'Papaya';
fruits[9] = 'Pomegranate';
fruits[10] = 'Cherry';
fruits[11] = 'Papaya';
fruits[12] = 'Pomegranate';
fruits[30] = 'Cherry';
document.write(fruits);
document.write('</br>');

var vegetables = new Array("Onion", "Pomegranate", "Lady Finger","Tomato","potato","peas");
document.write(vegetables);
document.write('</br>');
document.write(vegetables[3]);
document.write('</br>');

document.write('<b>Array Method Testing</b></br>');
document.write('<b> Array Length </b></br>');

var people = ['Tahmid','Ornat','sakib','Mahin','Allauddin'];
document.write(people.length);
document.write('</br>');

document.write('<b> Javascript Array Push() Method</b></br>');
var array = [];
array.push(10,20,30,40,50,60,70,80);
document.write(array);
document.write('</br>');
document.write('<b> Javascript Array pop() Method</b>');
document.write('</br>');
var names = ['Tahmid','Ornat','sakib','Mahin','Allauddin'];
var remove = names.pop();
document.write(names);
document.write('</br>');
document.write('remove value is :' +remove);
document.write('</br>');
document.write('<b>Javascript Array Shift()</b></br>');
var names = ['Tahmid','Ornat','sakib','Mahin','Allauddin'];
var initialElement = names.shift();
document.write(names);
document.write('</br>');
document.write('initial element is :' +initialElement);
document.write('</br>');
document.write('<b>Javascript Array unshift()</b></br>');
var nameArray =['Ash', 'Coco', 'Dean', 'Georgia'];
nameArray.unshift('Willy', 'Blaire')
document.write(nameArray);
document.write('</br>');

document.write('<b> Add New Value in Middle in list use splice method.</b></br>');
var people =['Tahmid','Ornat','sakib','Mahin','Allauddin'];
people.splice(3, 0, 'Willy','Rahim');	
document.write('Add value in middle in list :' +people);
document.write('</br>');
document.write('<b> concatenation Array use </b></br>');
var people1=['Mark','Linkon','sunny'];
document.write(people.concat(people1));
document.write('</br>');
var people_combine = people.concat(people1);
document.write(people_combine);
document.write('</br>');
document.write('<b>Array concatenation sort by value:</b>'+people_combine.sort());
document.write('</br>');
document.write('<b>Array concatenation reverse by value:</b>'+people_combine.reverse());
document.write('</br>');
var letter = people_combine.slice(0,3);
document.write('<b>Array slice by value:</b>'+letter);
document.write('</br>');
document.write('<b> Javascript Object Function Methodology</b></br>');
var Computer_Hp = {Model:'OMEN Hp-2022',Ram:'128GB',processor:'Intel i9 12th generation clock speed 5.30GHz',Graphics:'AMD Radeon RX6900 XT 24GB',Display:'17 inch OLED display',SSD:'512GB SSD',Battery:'Li-ion Battery',Price:'$2,000'};
document.write(' I wan to Buy a Gaming Laptop with </br>' + Computer_Hp.Model + ' Which is ram is ' + Computer_Hp.Ram + ' and processor is ' + Computer_Hp.processor + ' and Graphics is ' + Computer_Hp.Graphics + ' and Display is ' + Computer_Hp.Display + ' and SSD is ' + Computer_Hp.SSD + ' and Battery is ' + Computer_Hp.Battery + ' and Price is under' + Computer_Hp.Price);
document.write('</br>');
document.write('<b> Javascript Object in Detail Function</b></br>');
var Computer_MSI = {Model:'MSI Raider GE66 Deluxe Edition-2022',
Brand:'MSI',
Ram:'128GB',
processor:'Intel i9 12th generation clock speed 5.30GHz',
Graphics:'AMD Radeon RX6900 XT 24GB',
Display:'17 inch OLED display',
SSD:'512GB SSD',
Battery:'Li-ion Battery',
Price:'$4,000',
Type:'Gaming Laptop',
fullType:function(){
  return this.Type + ' ' + this.Model + ' ' + this.Ram + ' ' + this.processor + ' ' + this.Graphics + ' ' + this.Display + ' ' + this.SSD + ' ' + this.Battery + ' ' + this.Price;
 }
};
document.write(Computer_MSI.fullType());
document.write('</br>');















