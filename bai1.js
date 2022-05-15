//1. Xóa phần tử bất kỳ có trong mảng
let a = [5,2,1,3,6,10,8,9];
let x = [];
let vitrixoa = +prompt("Nhập ví trí xóa trong mảng")

for ( let i = 0; i < a.length ; i++) {
    if (i < vitrixoa) {
         x[i] = a[i]
    } else if ( i >= vitrixoa) {
        x[i] = a[i + 1]
    }
}console.log(x)