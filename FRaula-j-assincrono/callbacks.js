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

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['Video1','Video2', 'Video3'])
    }, 2000);
}

const user = loginUser('felipe@gmail.com', '123456', (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({videos})
    })
    console.log({ user })
}, (error) => {
    console.log({ error })
}
)
//console.log({user})