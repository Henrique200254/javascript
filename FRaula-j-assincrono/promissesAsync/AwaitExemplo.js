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

const displayUser = async () => {
    try {
        const user = await loginUser('felipe@gmail.com', '123456')
        const videos = await getUserVideos(user.email)
        const videoDetails = await getVideoDetails(videos[0])
        console.log({videoDetails})
    } catch (error) {
       console.log({error})
    }
}


//displayUser()