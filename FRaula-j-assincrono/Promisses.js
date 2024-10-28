/*
const loginUser = (email, password, callback, OnError) => {
    setTimeout(() => {
        const error = false
        if(error) {
            return OnError(new Error('Error in login!'))
        }
       console.log('User logged!') 
       callback ({ email })
    }, 1500);

}
*/
const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false

        if (error) {
            reject(new Error("error in login!"))
        }

        console.log("user logged!")
        resolve({email})
    })
}



loginUserPromise('felipe@gmail.com', '123456').then((user) => {
    console.log({user})
}).catch((error) => {
    console.log({error})
})