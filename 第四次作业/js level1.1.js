var a = 'Hi, my name\'s HCL, a SOFTWARE BEGINER';  
  
//for循环  
function titleCase(s) {  
    var i, ss = s.toLowerCase().split(/\s+/);  
    for (i = 0; i < ss.length; i++) {  
        ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);  
    }  
    return ss.join(' ');  
}  
console.log(titleCase(a));