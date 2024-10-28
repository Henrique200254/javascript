
const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false

        if (error) {
            reject(new Error("error in login!"))
        }

        console.log("user logged!")
        resolve({email})
    })
}

const getUserVideos = (email, callback) => {
    return new Promise((resolve, reject) => {
        console.log('getUserVideos')
        setTimeout(() => {
            resolve(['Video1','Video2', 'Video3'])
        }, 2000);
    })
    

}

const getVideoDetails = (video, callback) => {
    return new Promise ((resolve, reject) => {
        console.log('getUserDetails')
        setTimeout(() => {
            resolve({ title: "video title"})
        }, 2500);
    })
}



loginUser('felipe@gmail.com', '123456').then((user) => {
    return getUserVideos(user.email)
}).then((videos) => {
    return getVideoDetails(videos[0])
}).then((videoDetails) => {
      console.log({videoDetails})
}).catch((error) => {
    console.log({error})
})

//Promise.all serve para executar varias Promisses de uma vez

const yt = new Promise(resolve => {
    setTimeout(() => {
        resolve('videos from youtube')
    }, 2000);
})

const fb = new Promise((resolve) => {
     setTimeout(() => {
        resolve('posts from facebook')
     }, 3000);
})

Promise.all([yt,fb]).then((result) => {
     console.log({result})
})