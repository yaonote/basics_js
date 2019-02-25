
/**
 * 递归去判断 获取文件的信息
 */

var data = {
    type: 'dir',
    name: '123',
    files: [{
        type: 'file',
        name: '1'
    }, {
        type: 'file',
        name: '2'
    }, {
        type: 'dir',
        name: '1',
        files: [{
            type: 'file',
            name: '3'
        }, {
            type: 'dir',
            name: '2',
            files: [{
                type: 'file',
                name: '4'
            }, {
                type: 'file',
                name: '5'
            }]
        }, {
            type: 'dir',
            name: '3',
            files: [{
                type: 'file',
                name: '6'
            }, {
                type: 'file',
                name: '7'
            },{
                type: 'dir',
                name: '2',
                files: [{
                    type: 'file',
                    name: '-1'
                }, {
                    type: 'file',
                    name: '-2'
                }]
            }]
        }]
    }]
}
function read(file) {
    if (file.type === 'dir') {
        return readFiles(file.files)
    } else {
        return Promise.resolve([file.name]);
    }
}

function readFiles(files) {
    return Promise.all(files.map(read)).then(result => {
        return result.reduce((acc, cur) => [...acc, ...cur], []);
    })
}

readFiles(data.files)
    .then(result => console.log('1 =>', result))
    .catch(err => console.log(`err=>${err}`));
