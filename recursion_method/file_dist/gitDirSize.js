/**
 * 获取文件夹下文件的大小总和
 */

const dirData = [
    {
        type: 'file',
        size: 1
    },
    {
        type: 'dir',
        children: [
            {
                type: 'file',
                size: 2
            },
            {
                type: 'dir',
                children: [{
                    type: 'file',
                    size: 3
                }]
            }
        ]
    }
]