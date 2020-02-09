// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }
// console.log(Math.trunc(getRandom(1, 5)));
//
//
// function corectName(name) {
//     let nameLow = name.toLowerCase();
//     name = nameLow[0].toUpperCase()+nameLow.slice(1);
//     return(name);
// }
//
// console.log(corectName("kgpogjpoegpEUFJEVM"));
//
// function ToPow(number, degree) {
//     let res = 1;
//     for(let i = 1; i <= degree; ++i ){
//       res = res * number;
//     }
//     return (res);
// }
// const resultFunction = ToPow(3, -1);
// console.log(resultFunction);


// function num(number) {
//     let sp =  number.toString().split('').map(Number);
//     let max = Math.max(...sp);
//     return max;
// }
// console.log(num(23067));

// function tax(sum, nal, dodatNal) {
//     let res = 1;
//     res = sum / 100* (nal + dodatNal);
//     res = sum - res;
//     return res;
// }
// console.log(tax(1000,18,1.5));

// function removel(str, letter) {
//     console.log(str);
//    let pureStr = '';{
//        for (let i = 0; i < str.length; i++) {
//            if (str[i] !== letter) {
//                pureStr += str[i];
//            }
//        }
//     }
//     return pureStr;
// }
//
// console.log(removel('Bogdan', 'g'));
// function countL(str, letter) {
//     console.log(str);
//     let count = 0;
//     for (let i= 0; i < str.length; i++){
//         if(str[i] === letter){
//             count = count + 1;
//         }
//
//     }
//     return count;
// }
// console.log(countL('Bogdanbanan','n'));
//
// let p = Math.floor(Math.random()*10)   ;
// console.log(p, p ,p ,p ,p ,p);

