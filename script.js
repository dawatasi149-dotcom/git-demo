function async(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1 ",dataId);
            resolve("success");
        }, 3000);
    });
}
async(1).then((res) => {
    return async(2);
}).then((res) => {
    console.log(res);
})



























// // learning promise in js 
//     let promise = () => {
//        return new Promise((resolve, reject) => {
//             console.log("hello promise ");
//             // resolve("success");
//            reject("error");
        
//         });
//     };

// let p = promise();
// p.then(() => { 
//     console.log("hello world");
// });

// p.catch(() => {
//     console.log("get regected");
// })
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("super");
//         }, 5000);
//     });
// }
// let final = getData(33);