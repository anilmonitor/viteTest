let array = [2, 5, 6, 8, 9];

//map() method
function ok(x) {
    return x * 2;
}

let res = array.map(ok);
// console.log(res)

// or  --> via arrow function
let res2 = array.map(e => e*2);
// console.log(res2);



// filter() method 
let filres = array.filter(e => (e%2 != 0)); //give odd number
console.log(filres);

// or 
function greaterthan4(x){
    return x>4; //it will filter the all value greate then 4 and give us
}
let filres2 = array.filter(greaterthan4);
console.log(filres2);