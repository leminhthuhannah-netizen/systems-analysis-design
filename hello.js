function hello(){
    let a = document.getElementById("name").value;
    // alert("Hello, " + a)
    document.getElementById("Welcome").innerHTML = 'Xin chào ' + a;
}

function sum(){
    let a = document.getElementById('so_a').value;
    let b = document.getElementById('so_b').value;
    let kq = parseFloat(a) + parseFloat(b);
    document.getElementById('ket_qua').innerHTML =  kq;
}