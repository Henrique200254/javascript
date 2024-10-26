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

const loginUserPromise = (email, password) => {
    
}