        // Do async task
        // DB calls, Cryptography, Network

//        let promiseOne = new Promise(function(resolve, reject){
//             setTimeout(function(){
//                 console.log('Async task is Complete')
//                 resolve()
//             }, 1000)
//         })

// promiseOne.then(function(){
//     console.log('Promise consumed')
// })       

// let promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         resolve({username: 'Zohaib', email: 'zohaib@example.com'})
//     }, 1000);

// }).then(function(user){
// console.log(user)
// })

// let promiseThree = new Promise(function(resolve, reject){
    // setTimeout(() => {
    //     let error = true;
    //     if (!error) {
    //         resolve({username: 'Arham', password: 1234})
    //     } else {
    //         reject('Error : Something went wrong')
    //     }
    // }, 1000);
    
// }).then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(function() {
//     console.log('The promise is either resolved or rejected')
// })
        
// let promiseFour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({username: 'Zohaib', password: 123})
//         } else {
//             reject('Error : Something went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFour(){
//     try {
//         let response = await promiseFour
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }      
// }
// consumePromiseFour()

// async function getAllusers(params) {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllusers()
        
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
// return response.json()
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })  