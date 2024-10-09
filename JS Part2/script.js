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

 async function getData(){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(4300)
            }, 2500);
        })
}
async function main() {
    console.log("Loading modules");
    console.log("Do something else")
    let data = await getData()
        console.log(data)
        console.log('Yes this is await function')
    }

    main();