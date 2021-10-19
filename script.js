// arr = [10,20,30,40,50];

// for (i = 0; i<arr.length; i++) {  //PN можно заменить на index или сокращенно на i, так тоже можно, массив будет перебираться
//     console.log (arr[i]);
// }

//По дз, создать массив, в него ввести рандомные числа, и найти простые числа в нем
//Код, для создания массива, в нем найти простые числа и вывести их в консоль

// toStart: for (i=1; i<=10; i++){
//     //console.log (i);

//     for (j=2; j<i; j++) {
//         //console.log (` ${j}`);
//         if(i%j === 0) {
//             continue toStart;
//         }
//     }

//     console.log (i);
// }

//Делаем калькулятор

//Берем do/while. Делаем первое действие
//&& - это логическое И в js 

// do {
//     znak = prompt (`Enter one of operation +,-,*,/`);
//     znak = znak ? znak.trim() : ``;
// } while (znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/');

// console.log (znak);

// Второе действие, спросить у пользователя, сколько операндов он хочет использовать.
// Условие, больше 1 и меньше 7.

// do {
//     countOfOperands = +prompt (`Enter count operands, >1 and <=7`);
// } while(countOfOperands<=1 || countOfOperands>7);

// console.log (countOfOperands);

// for (i=1; i<=countOfOperands; i++) {
//     operand = prompt (`Enter operand #${i}`);
//     //console.log (operand);
//     if (i==1) {
//         result = operand;
//     } else {
//        switch(znak) {
//         case '+':
//             result += operand;
//             break;
//         case '-':
//             result -= operand;
//             break;
//         case '*':
//             result *= operand;
//             break;
//         case '/':
//             result /= operand;
//             break;
//         } 
//     }
// }

//min max поиск максимального и минимального числа в массиве

// формировка массива с рандомными числами с помощью формулы

// Math.random - создает рандомное число
// Math.round - округляет число
//синтаксис Math.round(Math.random()*100);

//сам массив
// arrA = [];
// arrA.length = 10;


// for (i=0, min = -10, max=10; i<arrA.length; i++) {
//     arrA[i] = Math.floor (Math.random() * (max - min + 1)) + min;

//     //это более короткий способ перебора массива
//     //также подойдет для получения и максимального значения числа в массиве
// if (i===0){
//     minValue = arrA[i];
//     maxValue = arrA[i];
// } else {
//     if (arrA[i]<minValue) {
//         minValue = arrA[i];
//         }
    
//     if (arrA[i]>maxValue) {
//         maxValue = arrA[i];
//         }
//     }
// }

// console.log (arrA);
// console.log (`Min value = ${minValue}`);
// console.log (`Max value = ${maxValue}`); 

//это более долгий способ перебора массива
// console.log (arrA);

// minValue = arrA[0];
// for (i=1; i<arrA.length; i++) {
//     console.log (arrA[i]);
//     if (arrA[i]<minValue) {
//         minValue = arrA[i];
//     }
// }

//console.log (`Min value = ${minValue}`);

// запрос длины массива от пользователя, такое же условие в дз
// arrA = new Array(+prompt(`Enter length of arr!`));




//условие для переноса чисел в новый массив

// arrA = new Array(10);


// for (i=0, min = -10, max=10, minIndex=maxIndex=0; i<arrA.length; i++) {
//     arrA[i] = Math.floor (Math.random() * (max - min + 1)) + min;

// if (arrA[i]<arrA[minIndex]) {
//     minIndex = i;
// }

// if (arrA[i]>arrA[maxIndex]){
//     maxIndex = i;
// }

//это удалается и пишется новый код
// if (i===0){
//     minValue = arrA[i];
//     maxValue = arrA[i];
// } else {
//     if (arrA[i]<minValue) {
//         minValue = arrA[i];
//         }
    
//     if (arrA[i]>maxValue) {
//         maxValue = arrA[i];
//         }
//     }
//}

// console.log (arrA);
// console.log (`Min index = ${minIndex}`);
// console.log (`Max index = ${maxIndex}`);

// arrB = [];

// if (minIndex>maxIndex) {
//     startIndex = maxIndex;
//     endIndex = minIndex;
// } else {
//     startIndex = minIndex;
//     endIndex = maxIndex;
// }

// for (i=0, startIndex+=1; startIndex<endIndex; startIndex++, i++) {
//     arrB[i] = arrA[startIndex];
// }

// console.log(arrB);

//Само дз 7
//первое условие, запросить у пользователя длину массива и наполнить массив рандомными числами
arrA = new Array(+prompt(`Enter length of arr!`));

for (i=0, min=-10, max=10; i<arrA.length; i++) {
    arrA[i] = Math.floor(Math.random() * (max - min +1)) + min;
}
    console.log (arrA); 

//второе условие, в сформированном массиве найти простые числа и записать в массив arrB
 for (i=0; i<arrA.length; i++){
     flag = true;
    console.log (i);

    for (j=2; j<i; j++) {
        console.log (` ${j}`);
        if(arrA[i] % j === 0) {
            flag = false;
        }
    }
    if (flag) {
        console.log (`${arrA[i]} простое число`);
    } else {
        console.log (`${arrA[i]} непростое число`);
    }
    
}