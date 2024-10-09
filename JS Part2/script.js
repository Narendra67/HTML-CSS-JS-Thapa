//promises

let promps1 = new Promise((resolve, reject) =>{
    let a = Math.random()
        if (a < 0.5) {
            reject("No random number was not supporting you")
            
        }
        else{
            setTimeout(() => {
                console.log('Yes, this is done')
                resolve("Narendra")
            }, 2000);
        }
        })


promps1.then((a) =>{
    console.log(a)
})