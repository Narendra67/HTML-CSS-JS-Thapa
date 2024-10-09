// var result = "10" /3;
// console.log(result);
// var myName = 0.1 + 0.2;
// console.log(myName.toFixed(2));
 
// var res = 55* "hello";
// console.log(res) // NaN

// let userAge = 25;
// let isCitizen = true;
// let isRegistered = false;
// if(userAge>=18){
//     if(isCitizen){
//         if(isRegistered){
//             console.log("You are eligible to vote")
//         }
//         else{
//             console.log("You are not eligibale due to registration status")
//         }
//     }
//     else{
//         console.log("You are not elible bcoz you have not citizenship")
//     }
// }
// else{
//     console.log("You are not eligible to vote (Younger)")
// }



// let num = 7;
// if(num %2 ===0){
//     console.log("Num is even")
// }
// else{
//     console.log("Num is odd")
// }
//   Find zero, positive and negative number.
 
// let num = 0;
// if(num === 0){
//     console.log("Num is Zero")
// }
// else if(num > 0){
//     console.log("Num is positive")
// }
// else{
//     console.log("Num is Negative")
// }


// var areaOfShape = "square";
// var length = 5;
// var height = 10;
// var result;
// switch(areaOfShape){
//     case "square":
//     result = length * height;
//     console.log(result);
//     break;


// case "rectangular":
//     result = length * height;
//     console.log(result);
//     break;

//     case "circle":
//         var r = 2;
//         result = 3.14 * (r * r);
//         console.log(result);
//         break;
//         default:
//             console.log("No shape mathes")
// }


// num = 1;
// while(num<=10){
//     console.log("5 * " + num + " = " + 5 * num)
//     num++;
// }

// for(num = 1; num <= 10; num++){
//      console.log("5 * " + num + " = " + 5 * num)
// }

// let num = 1;
// do{
//     console.log("5 * " + num + " = " + 5 * num)
//     num++;
// }while(num  <= 10);

// var num = 10;
// var isPrime = true;

//     for(var i = 2; i < num; i++){
//     if(num % i ===0){
//         isPrime = false;
//         break;
//     }
// }  
// if(isPrime){
//     console.log("Num is prime")
// }
// else{
//     console.log("Number is not prime");
// }

// var year = 2023;
// if(year % 4 ===0 && year % 100 !==0 || year % 400 === 0){
//  console.log(year , " It's a leap year")
// }
// else{
//     console.log(year, "It's not a leap year")
// }
    

// const arr = ["Naru", "Rohan", "Mala", "Diva" ,1];
// arr[1] = "Krishna"
// console.log(arr);
// for(let item in arr){
//     console.log(item)
// }
// for(let item of arr){
//     console.log(item)
// }

// arr.forEach((curElem, index, arr)=>{
// // console.log(`${curElem} ${index}`)
// console.log(arr)
// })

//  const myArr = arr.map((curElem, index, arr)=>{
//      return `my favorite name is ${curElem} ${index}`
// })
// console.log(myArr);


//  const arr1 = ["Naru", "Krishna","Jay",  "Surya", "Jay"]
// arr1.forEach((curElem) =>{
//     console.log(curElem*2);
// })

// const newValue = arr1.map((curElem) =>{
//     return curElem*2;
// })
// console.log(newValue);

// console.log(arr1.push(8));
// console.log(arr1)
// console.log(arr1)

// console.log(arr1.splice(-1, 1, "Ajay"))
// arr1.splice(arr1.length,0 , "Golu")
// console.log(arr1)
// console.log(arr1.indexOf("Naru"))
// console.log(arr1.includes("Naru"))
// console.log(arr1.lastIndexOf("jay"))
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
// console.log(numbers.indexOf(2, 5));
// const months = ['Jan', 'Feb']
// months.splice(months.length, 0, 'Sep')
// console.log(months);

// const res = numbers.map((curElem) =>curElem*5)
// console.log(res)
// const res1 = res.find((curElem) =>{
//     return curElem >15;
// });// It will give Value.
// const res2 = res.findIndex((curElem) =>{
    //     return curElem >15;
    // });// It will give only Index number.
    // console.log(res1);
    // console.log(res2);
    // let Value = 6;
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6,2];
//     const result = numbers.filter((curElem)=>{
//         return curElem > 4;
//     })
// console.log(result);


// console.log([...new Set(numbers)]) // For unique data.
// numbers.sort();
// console.log(numbers);

// const sortedNum = numbers.sort((a,b)=>{
//     if(a>b) return 1;
    // if(b>a) return -1;

// });
// console.log(numbers)

// let str = 'This is  my \'Youtube channel\'  Please \"Subscribe\" it.'
// console.log(str)


// let name1 = "This is javascript series and I love javascript";
// let strArr = Array.from(name1)
// console.log(strArr)
// let strMap = name1.map((curElem, index)=>`${curElem} ${index}`);
// console.log(strMap);

// let result = name1.match(/JavaScript/gi);
// console.log(result)

// let name1 = "This is javascript series and I love javascript";
// let matchRes = name1.matchAll("javascript")
// // console.log(...matchRes);

// for(item of matchRes);
// console.log(item[0])


// let str = "apple, orange, banana";
// let strArr = str.split(",").reverse().join();
// console.log(strArr);
// console.log("a".charCodeAt(0))
// console.log("z".charCodeAt(0))
// WAJC to print alphabets
// for(let char = 97; char<=122; char++){
//     console.log(String.fromCharCode(char))
// }
// console.log(char)

// const programChecker =(str) =>{


// }
// console.log(programChecker("The quick fdklaso jsklnm,x we;rpo djksalj aaxm,znvbz,pretuu"))

// const value = Math.PI;
// console.log(value)

// console.log(Math.abs(-10));
// const floorValue = Math.floor(-3.7);
// const truncValue = Math.trunc(-3.6);
// const ceilValue = Math.ceil(-3.6);
// const roundValue = Math.round(-3.6);

// console.log(floorValue)
// console.log(truncValue)
// console.log(ceilValue)
// console.log(roundValue)

// console.log((Math.random()*100).toFixed(3))

// Todo List

// let inputElem = document.getElementById