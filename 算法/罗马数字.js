
const romanEntity = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
}
const spStr = (str) => {
    return ["IV","IX","XL","XC","CD","CM"].reduce((acc,curr) => {
        const regRes = str.match(new RegExp(`${curr}`));
        const oneStr = regRes ? regRes.reduce((acc,curr) => {
                return acc + romanEntity[curr]
            },0) 
        : 0 ;
        return acc+oneStr
    },0)
}


const romanToInt = (str) => {
    const reg = /IV|IX|XL|XC|CD|CM/g;
    const str1 = str.replace(reg,'')
    const romanArr = str1.split('').reduce((acc,curr) => {
        return acc+romanEntity[curr]
    },0)
    return romanArr + spStr(str)
}   

console.log(romanToInt('IX'))