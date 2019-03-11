try {
    console.log(1);

    setTimeout(() => {
        console.log(2)
    },200)

    setTimeout(() => {
        console.log(3)
        throw new Error(5)
    })

    console.log(4)

}catch(err) {
    console.log(e)
}