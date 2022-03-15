// Bai 1: Sắp Xếp theo thứ tự tăng dần
var btnSubmit = document.getElementById("btn__submit");
btnSubmit.onclick = function () {
    // B1: biến người dùng nhập & button xử lý
    var number__1 = document.getElementById("number__1").value;
    var number__2 = document.getElementById("number__2").value;
    var number__3 = document.getElementById("number__3").value;
    // B2: xử lý dữ liệu
    number__1 = parseInt(number__1);
    number__2 = parseInt(number__2);
    number__3 = parseInt(number__3);
    if(number__1 >= number__2 && number__1 >= number__3 && number__2 >= number__3){
        // B3: in ra man hình kết quả
        document.getElementById("result").innerHTML = number__3+","+number__2+","+number__1;
    }
    else if(number__3 >= number__2 && number__3 >= number__1 && number__2 >= number__1 ){
        document.getElementById("result").innerHTML = (number__1+","+number__2+","+number__3);
    }
    else if(number__2 >= number__3 && number__2 >= number__1 && number__1 >= number__3 ){
        document.getElementById("result").innerHTML = (number__3+","+number__1+","+number__2);
    }
    else if(number__3 >= number__1 && number__3 >= number__2 && number__1 >= number__2 ){
        document.getElementById("result").innerHTML = (number__2+","+number__1+","+number__3);
    }
    else if(number__1 >= number__2 && number__1 >= number__3 && number__3 >= number__2 ){
        document.getElementById("result").innerHTML = (number__2+","+number__3+","+number__1);
    }
}
//Bai 2: 
var btnClick = document.getElementById("btn__q2");
btnClick.onclick = function () { 
    var whoAreYou = prompt("Bạn Là Ai Trong Gia Đình?(B,M,A,E)");
    if (whoAreYou == "B" || whoAreYou == "Ba" || whoAreYou == "b") {
        alert("Chào Ba");
    } else if(whoAreYou == "M" || whoAreYou == "Me" || whoAreYou == "m"){
        alert("Chào Mẹ");
    }
    else if(whoAreYou == "A" || whoAreYou == "Anh" || whoAreYou == "a"){
        alert("Chào Anh");
    }
    else if(whoAreYou == "E" || whoAreYou == "e" || whoAreYou == "em"){
        alert("Chào Em");
    }
}
// Bai 3:

var btnSubmit3 = document.getElementById("btn__submit__3");
btnSubmit3.onclick = function () {
    // B1: biến người dùng nhập & button xử lý
    var number1 = document.getElementById("number__1__3").value;
    var number2 = document.getElementById("number__2__3").value;
    var number3 = document.getElementById("number__3__3").value;
    // B2: xử lý dữ liệu
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    number3 = parseInt(number3);
    var array = [number1, number2, number3];
    var evenNumber = 0;
    var oddNumber = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            evenNumber++;
        }
        else{
            oddNumber++;
        }
    }
    document.getElementById("result__3").innerHTML = "Số Chắn: " + evenNumber + "Số Lẻ: " + oddNumber;
}

// Bai 4:
var btnSubmit4 = document.getElementById("btn__submit__4");
btnSubmit4.onclick = function () {
    // B1: biến người dùng nhập
    var triangleEdge__1 = document.getElementById("triangleEdge__1").value;
    var triangleEdge__2 = document.getElementById("triangleEdge__2").value;
    var triangleEdge__3 = document.getElementById("triangleEdge__3").value;
    // B2: xử lý dữ liệu
    var a = triangleEdge__1;
    var b = triangleEdge__2;
    var c = triangleEdge__3;
    var result = "";
    if(a == b || a == c || b == c ){
        result = "Tam Giác Cân";
    }
    else if(a == b && b == c){
        result = "Tam Giác Đều";
    }
    else if(a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c){
        result = "Tam Giác Vuông";
    }
    else{
        result = "Tam Giác Thường";
    }
    document.getElementById("result__4").innerHTML = result;
}