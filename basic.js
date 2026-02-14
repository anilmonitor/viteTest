let array = [2, 5, 6, 8, 9];

//map() method
function ok(x) {
    return x * 2;
}

let res = array.map(ok);
console.log(res)

// or  --> via arrow function
let res2 = array.map(e => e * 2);
console.log()
console.log(res2);



