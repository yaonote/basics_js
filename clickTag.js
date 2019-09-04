const child = require('child_process');

const handleExec = (shell) => {
    return new Promise((resolve,reject) => {
        child.exec(shell,function(err,sto){
            if(err){
                reject(err);
            }else{
                resolve(sto)
            }
        })
    })
}

var branchName = '';
var newTag = '';
handleExec('git symbolic-ref -q --short HEAD').then(branchNameRes => {
    branchName = branchNameRes.replace('\n','');
    return handleExec(`git tag | grep v${branchName}_Alpha`)
}).then(tags => {
    let newTagIndex = Array.from(tags.split('\n').filter(tag => tag)).length;
    newTagIndex = newTagIndex > 9 ? newTagIndex : `0${newTagIndex}`;
    newTag = `v${branchName}_Alpha${newTagIndex}`;
    return handleExec(`git tag ${newTag}`)
}).then(res => {
    return handleExec(`git push origin ${newTag}`)
}).then(res => {
    console.log('over =>',res)
})
.catch(err => {
    console.log('yao-coding err =>',err)
})