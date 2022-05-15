//3. Nhập 1 số kiểm tra số đó có trong mảng hay không? Nếu có trả về vị trí của phần tử đó

let a = [5,2,1,3,6,10,8,9];
let input = +prompt("Nhập 1 số kiểm tra trong hàm")
for (let i = 0; i < a.length; i ++) {
    if (input === a[i]) {
        console.log(typeof input)
        alert("Bạn đã nhập đúng phần tử trong mảng" + "Vị trí ở "+ i)
        break;
    } else {
        alert("Bạn đã nhập sai phần tử trong mảng")
        continue;
}   
}