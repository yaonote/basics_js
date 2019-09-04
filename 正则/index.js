/**
 *  replace 的第二个参数是函数的话 
 * 
 *  函数的参数 第一个是匹配到的整体 
 *  有子语句的话 第二个以后的参数对应 子语句
 *  倒数第一个是原字符串
 *  倒数第二个是匹配到的位置
 */

// const toUpper = (str) => str.replace(/\_(\w)/g,(_,needUpper) => needUpper.toUpperCase()) 

// const toLine = (str) => str.replace(/([A-Z])/g,'_$1').toLowerCase();

/**
 *  横向匹配 {} 几到几个  {m,} 、 {m} 、 ? === {0,1} 、 + === {1,} 、* === {0,} (任意次) 
 *  纵向匹配 [] 其中的一个
 */

//  const reg = /#([\w]{6}|[\w]{3})/g;
//  const color = '#ddd #ffff #cccccc';
//  console.log(color.match(reg))

// 匹配时间 00:00-23:59
// const reg = /^([01][0-9]|[0-2][0-3]):[0-5][0-9]$/;

// launchApp://mx_meeting$$#/meeting_detail/1164454853980852224

// const str = 'launchApp://mx_meeting$$#/meeting_detail/1164454853980852224';

// const res = str.match(/\/\/([^)]*)\$$/)

// console.log(res[1]);



// var aa="ldfjsldfj(dsfasjfj3124123)";
// var result = aa.match(/\( ([^)]*) \)/);
// // 此时result＝["(dsfasjfj3124123)", "dsfasjfj3124123"];
// if (result) {
//     console.log(result[1]); // "dsfasjfj3124123"
// }