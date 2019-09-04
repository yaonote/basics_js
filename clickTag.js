const child = require('child_process');



child.exec('git symbolic-ref -q --short HEAD',function(err,sto){
    console.log('sto =>',sto)
})