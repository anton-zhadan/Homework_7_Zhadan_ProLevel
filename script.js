//первое условие, запросить у пользователя длину массива и наполнить массив рандомными числами

arrA = new Array(+prompt(`Enter length of arr!`));
arrB = [];

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
    if (flag && arrA[i]>0)  {
        console.log (`${arrA[i]} простое число`);
        arrB[arrB.length] = arrA[i];
    } else {
        console.log (`${arrA[i]} непростое число`);
    }    
}

console.log (arrB);

//третье условие, поиск максимального и минимального значения

for (i=0; i<arrB.length; i++){

    if(i===0) {
        minValue = maxValue = arrB[i];
    } else {
        if (arrB[i]<minValue) {
            minValue = arrB[i];
        }
        if (arrB[i]>maxValue) {
            maxValue = arrB[i];
        }
    }
}

console.log(`min value = ${minValue}`);
console.log(`max value = ${maxValue}`);