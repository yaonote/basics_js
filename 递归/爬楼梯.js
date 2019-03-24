function cStairs(n) {
    if(n === 1 || n === 2) return 1 ;
    return cStairs(n-1) + cStairs(n - 2)
}

console.log(cStairs(10))