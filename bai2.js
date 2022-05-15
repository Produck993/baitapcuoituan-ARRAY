//2. Thêm phần tử vị trị bất kỳ vào mảng
let a = [5,2,1,3,6,10,8,9];
let x = []
let vitrithem = +prompt("Nhập vào vị trí xóa trong mảng")
let value = +prompt("Nhập vào ")
for (let i = 0; i < a.length; i ++) {
    if(i < vitrithem) {
        x[i] = a[i]
    } else if ( i == vitrithem) {
        x[i] = a[value]
    } else {
        x[i] = a[i-1]
    }
}
console.log(x)