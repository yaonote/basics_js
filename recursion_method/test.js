
const allData = [
    {
        "id": 1,
        "name": "英语烤柿",
        "parent_id": 0
    },
    {
        "id": 3,
        "name": "英语4级",
        "parent_id": 1
    },
    {
        "id": 4,
        "name": "英语4级1",
        "parent_id": 1
    },
    {
        "id": 5,
        "name": "英语4级12",
        "parent_id": 1
    },
    {
        "id": 6,
        "name": "英语4级123",
        "parent_id": 1
    },
    {
        "id": 7,
        "name": "英语4123级123",
        "parent_id": 5
    },
    {
        "id": 8,
        "name": "英语4123级asdf123",
        "parent_id": 5
    },
    {
        "id": 9,
        "name": "英asdf语4123级asdf123",
        "parent_id": 5
    },
    {
        "id": 10,
        "name": "英asdf语4123sdf123",
        "parent_id": 5
    },
    {
        "id": 11,
        "name": "英asd语4123sdf123",
        "parent_id": 5
    }
]

let delIdsArr = [];
const delIds = (data,idArr) => {
    const flag = data.some((item) => idArr.includes(item.parent_id));
    if(!flag) return delIdsArr
    const ids = data.filter(item => idArr.includes(item.parent_id)).map(item => item.id)
    delIdsArr = [...delIdsArr,...ids]
    return delIds(data,ids)
}
const  res = delIds(allData,[1])
console.log(`delIds => ${JSON.stringify(res)}`)
