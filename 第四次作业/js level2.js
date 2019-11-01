let arr = [[1,2],[[3],4],[8],9]
function flatten(arr) {
　　return [].concat(
　　　　...arr.map(x=>
　　　　　　Array.isArray(x) ? flatten(x):x
　　　　)
　　)
}
console.log(flatten(arr))// ->[1,2,3,4]