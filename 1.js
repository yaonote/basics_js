const msgIds = [1,2];
const convIds = [7,8,9];
const userIds = [];

const send = (id,type,index) => new Promise((resolve)=>{
    console.log(`${type} => ${id }`);
    setTimeout(() => {
        return resolve(`${type} => ${id }`)
    },300*index)
})
const convIdsPromise = (conv,index) => Promise.all(convIds.map(item => send(item,conv,index)));
const userIdsPromise = (user,index) => Promise.all(userIds.map(item => send(item,user,index)));
const all = (msgId,index) => Promise.all([convIdsPromise,userIdsPromise].map(promiseItem => promiseItem(msgId,index)))
Promise.all(msgIds.map((id,index) => all(id,index))).then(res => {
    // console.log(res);
}).catch(err => {
    console.error(err);
})