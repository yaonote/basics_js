    /**
     * 获取当前文件夹下的所有文件的大小,有文件夹的话遍历去找 size doing
     */
    const  data = [{
        "fid": 50096498541494,
        "icon": "image",
        "name": "1544699030832.jpg",
        "parent": 50096498540678,
        "size": 573907,
        "type": "file",
    }, {
       
        "fid": 50096498540681,
        "icon": "folder",
        "name": "1",
        "parent": 50096498540678,
        "size": 0,
        "type": "dir",
    }, {
        "fid": 50096498540601,
        "icon": "pdf",
        "name": "【测试工程师 _ 天津 4k-6k】李菲 2年.pdf",
        "parent": 50096498540678,
        "size": 85386,
        "type": "file",
    },{
        "fid": 50096498541500,
        "icon": "ppt",
        "name": "敏行移动平台-简介v16.5.pptx",
        "parent": 50096498540681,
        "size": 37866127,
        "type": "file",
        "network_id": 2
    }, {
        "fid": 50096498540682,
        "icon": "folder",
        "name": "2",
        "parent": 50096498540681,
        "size": 0,
        "type": "dir",
    },{
        "fid": 50096498540683,
        "icon": "folder",
        "name": "3",
        "parent": 50096498540682,
        "size": 0,
        "type": "dir",
    },{
        "fid": 50096498540684,
        "icon": "folder",
        "name": "4",
        "parent": 50096498540683,
        "size": 0,
        "type": "dir",
    },{
        "fid": 50096498540778,
        "icon": "word",
        "name": "新建 DOC 文档.doc",
        "parent": 50096498540684,
        "size": 9728,
        "type": "file",
    }, {
        "fid": 50096498540686,
        "icon": "image",
        "name": "0729f89cfdc2e1532581348e02edc4cb.jpg",
        "parent": 50096498540684,
        "size": 224305,
        "type": "file",
    }]

    const CurUserDB = {
        getFilesDist: ({parent}) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data.filter(item => item.parent === parent))
                },200)
            })
        }
    }

    
    function getDirFileSize(obj/**{parent: fid} */){
        return new Promise((resolve) => {
            var size = 0;
            var _getDirList = function(dirArr) {
                getDirList(dirArr)
                .then(function(result) {
                    console.log(`result => ${JSON.stringify(result)}`)
                    var sizeAndDir = result.reduce(function(acc, cur) {
                        acc.size = acc.size + cur.size;
                        acc.dir = acc.dir.concat(cur.dir);
                        return acc;
                    },{size:0,dir:[]});
                    size += sizeAndDir.size;
                    if(sizeAndDir.dir.length === 0){
                        resolve(size)
                    }else{
                       _getDirList(sizeAndDir.dir)
                    }
                })
            }
            _getDirList([obj]);
        })
        

    }
    function getDirList(dirArr) {
        return Promise.all(dirArr.map(function(item) {
            let dirFileSize = 0;
            return CurUserDB.getFilesDist({'parent': item.fid})
            .then(function(data){
                if(!data.length){
                    return Promise.resolve({size:dirFileSize, dir:[]});
                }else if(data.every(function(file){return file.type == 'file'})){
                    dirFileSize += data.reduce(function(acc,curr){return acc+Number(curr.size)},0)   
                    return Promise.resolve({size:dirFileSize, dir:[]});
                }else{
                    dirFileSize += data.filter(function(item){return item.type == 'file'})
                    .reduce(function(acc,curr){return acc+Number(curr.size)},0) ;
                    let dirList = data.filter(function(item){return item.type == 'dir'})
                    return Promise.resolve({size:dirFileSize, dir:dirList});
                }
            })
        }))
    }

    
    // getDirFileSize({'fid':50096498540678})
    // .then(res => {
    //     console.log(`res => ${res}`)
    // })

    // CurUserDB.getFilesDist({'parent':50096498540678})
    // .then(res => {
    //     console.log(`res CurUserDB=> ${JSON.stringify(res)}`)
    // })
    const getDirSize = (data) => {
        let size = 0;
        return new Promise(resolve => {
            (function inner(_data){
                getDirList(_data).then(result => {
                    const sizeAndDir = result.reduce(function(acc, cur) {
                        return {
                            size: acc.size + cur.size,
                            dir: acc.dir.concat(cur.dir)
                        }
                    },{size:0,dir:[]});

                    size += sizeAndDir.size;

                    if(sizeAndDir.dir.length === 0){
                        resolve(size)
                    }else{
                        inner(sizeAndDir.dir)
                    }
                })
            })(data)
        })
    }

    getDirSize([{'fid':50096498540678}])
    .then(res => {
        console.log(`res => ${res}`)
    })

    //res => 38759453




    const getDirSizeErr = (data) => {
        let size = 0;
        return new Promise(resolve => {
            getDirList(data).then(result => {
                const sizeAndDir = result.reduce(function(acc, cur) {
                    return {
                        size: acc.size + cur.size,
                        dir: acc.dir.concat(cur.dir)
                    }
                },{size:0,dir:[]});
                size += sizeAndDir.size;
                if(sizeAndDir.dir.length === 0){
                    resolve(size)
                }else{
                    getDirSize(sizeAndDir.dir)
                }
            })
        })
    }