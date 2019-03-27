function clone1(source) {
    var target = {};

    for(var key in source){
        if(source.hasOwnProperty(key)){

            if(typeof source[key] === 'object'){
                target[key] = clone1(source[key])
            }else{
                target[key] = source[key];
            }
        }
    }

    return target 
}
