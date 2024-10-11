//promises

// let promps1 = new Promise((resolve, reject) =>{
//     let a = Math.random()
//         if (a < 0.5) {
//             reject("No random number was not supporting you")
            
//         }
//         else{
//             setTimeout(() => {
//                 console.log('Yes, this is done')
//                 resolve("Narendra")
//             }, 2000);
//         }
//         })


// promps1.then((a) =>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// });


// Async await


//  async function getData(){
//         return new Promise((resolve, reject) =>{
//             setTimeout(() => {
//                 resolve(4300)
//             }, 2500);
//         })
// }
// async function main() {
//     console.log("Loading modules");
//     console.log("Do something else")
//     let data = await getData()
//         console.log(data)
//         console.log('Yes this is await function')
//     }

//     main();

// async function getData(){
//     // Simulate getting data from a Server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await x.json();
//     return data;

//     }
//     async function main() {
//         console.log("Loading modules");
//         console.log("Do something else")
//         let data = await getData()
//             console.log(data)
//             console.log('Yes this is await function')
//         }
    
//         main();



// let count = true;
// const p1 = new Promise(function(resolve, reject){
//     if(count){
//         resolve("Async task is Completed")
//     }
//     else{
//         reject("Error")
//     }
// })
// console.log(p1);


// Object oriented Programming(in JS)

// const obj = {
//     name: "Narendra",
//     age: 22
// }

// console.log(obj)
// console.log(obj.name);


// class Animal{
//     constructor(name){
//         this.name = name;
//         console.log("Object is created");
//     }

//     eats(){
//         console.log("I'm eating")
//     }
//     jumps(){
//         console.log("they jumped")
//     }
// }
// class Lion extends Animal{
//     constructor(name){
//         super(name);
//         console.log("Object is created and he is a lion")
//     }

// }
// let a = new Animal("kalii");
// console.log(a);
// let lion = new Lion("Sherru");
// console.log(lion);



// document.getElementById("myBtn").onclick = function(){
//     alert("Welcome again");
// }
// document.getElementById('myBtn2').addEventListener('click', function(){
//     alert("Welcome to button 2")
// })

