//4. Sắp xếp các phần tử của 1 mảng theo thứ tự bé đến lớn
let a = [5,2,1,3,6,10,8,9];
console.log(a)
for (i = 0; i < a.length; i ++) {
    for ( j = i + 1; j < a.length; j ++) {
        if (a[j] < a[i]) {
            let tong = a[j];
            a[j] = a[i];
            a[i] = tong
        }
    }
}console.log(a)