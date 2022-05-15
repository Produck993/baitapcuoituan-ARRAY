//4. Sắp xếp các phần tử của 1 mảng theo thứ tự bé đến lớn [5,2,1,3,6,10,8,9]

let a = [5,2,1,3,6,10,8,9];
// console.log(a)
// for (let i = 0; i < a.length; i ++) {
//     for(let j = i+1; j < a.length; j ++) {
//         if (a[i] < a[j]) {
//             let ketqua = a[i]
//             a[i] = a[j]
//             a[j] = ketqua
//         }
//     }
// }
//      console.log(a)
console.log(a.sort())
console.log(a.reverse())
