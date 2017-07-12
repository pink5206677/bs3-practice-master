var number1 = 12;
console.log(number1);

number1 = 25;
console.log('現在number1 = ' + number1);

console.log(typeof number1); //查型別

number1 = number1 + 1;
console.log('現在number1 = ' + number1 + '型別是' + typeof number1);

number1 = number1 + '1'; //文+字
console.log(number1);
console.log(typeof number1);

//判斷
console.log('1' === 1);

console.log(2 != 5);

//判斷式   
var number2 = 40;
var number3 = 20;

/*if(條件){做什麼事情}
 else {做什麼事情} */

if (number2 > number3) {
    console.log('number2有大於number3');
} else if (number2 < number3) {
    console.log('number2有小於number3');
} else {
    console.log('number2有等於number3');
}

console.log(number2 > number3);

console.log(typeof true);

//陣列

var list = [1, 3, 5, 7, 'test'];
console.log(list);
console.log(list[0]);
console.log(list[4]);

console.log(list.length); //長度

//迴圈 for

for (var i = 0; i < list.length; i++) // i++ = +1
{
    console.log(list[i]);

}

//function
function addNumber(a, b) {
    var number = a + b;
    console.log(number)
}
addNumber(10, 50);
addNumber(22, 60);


//物件
/*var dog = {
    name: '小黃',
    age: 6,
    bread: '黃金獵犬',
    hasPuppy: false

};
console.log(dog);
console.log(dog.name);*/


//處理多個

var Dog = function (name, age, breed, hasPuppy) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.hasPuppy = hasPuppy
}

var dog1 = new Dog('小黃', 10, '黃金獵犬', false);
var dog2 = new Dog('小黑', 10, '黃金獵犬', false);
console.log(dog1);
console.log(dog2);





//用陣列存起來上面
var dogs = [dog1, dog2];

console.table(dogs);
