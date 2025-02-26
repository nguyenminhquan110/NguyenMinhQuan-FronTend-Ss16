
let a = prompt('Nhập số thứ nhất: ');
let b = prompt('Nhập số thứ hai: ');
let c = prompt('Nhập số thứ ba: ');
if(a>b && a>c){
    document.write('Giá trị lớn nhất là: ' +a);
}else if(b>a && b>c){
    document.write('Giá trị lớn nhất: ' +b);
}else{
    document.write('Giá trị lớn nhất: ' +c);
}