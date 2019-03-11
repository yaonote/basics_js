

function axios() {
    return new Promise((resolve, reject) => {
        $ajax({
            url: '',
            success: function(data){
                resolve(data)
            },
            error: function(err){
                reject(err)
            }
        })
    })
}