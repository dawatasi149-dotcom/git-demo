//async await in js 
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
};
async function getAlldata() {
    await getData(1);
    console.log("getting data 2");
    await getData(2);
}

(async function () {
    console.log("geting all data 2")
    await getData(1);
    console.log("getting data 2");
    await getData(2);
})();
























// function async(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//         }, 3000);
//     });
// }
// console.log("getting data 1")
// async(1).then((res) => {
//       console.log("getting data 2");
//     return async(2);
  
// }).then((res) => {
//     console.log("getting data 3");
//     return async(3);
// }).then((res) => {
//     console.log(res);
// })



























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