const child = require('child_process');

child.exec('pwd',function(err,sto){
    console.log('sto =>',sto)
})

child.exec('git status',function(err,sto){
    console.log('sto =>',sto)
})