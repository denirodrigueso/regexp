// const labs = "018.184.665-97  026.651.552.20"
// const regExpD = /[0-9]+\.[0-9]+\.[0-9]+\-*\.*[0-9]+/g;

// console.log(labs.match(regExpD));

//const ip = "0.0.0.0, 255.255.255.255, 192.168.0.25, 10.10.5.12, 1654.8888.22"

//const regExpIP = /.{0,3}\..{0,3}\..{0,3}\S/;
const regExpIP = /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g;
for (let i = 0; i <= 300; i++) {
    const ip = `${i}.${i}.${i}.${i}`;
    console.log(ip , ip.match(regExpIP));
}

// function prova(a, b) {
//     var f = false
//     var x = a
//     if (b > x) x = b

//     if (f == false) {
//         while (!f) {
//             if (x % a == 0 && x % b == 0) {
//                 f = true
//             } else {
//                 x++
//             }

//         }
//     }
//     return x;
// }
// console.log(prova(6, 10));

// var lb = true
// var k = 5
// var m = 4
// var la = ! lb || k == m
// lb = k > m && la
// console.log("la = ", la)
// console.log("lb = ", lb) 
