
function Average(a,b){
    let kq = (a+b)/2;
    return kq;
}
function calculate(){
    let g1 = parseFloat(document.getElementById('value1').value);
    let g2 = parseFloat(document.getElementById('value2').value);
    let aver = Average(g1,g2);

    // grade
    let score = " ";
    if (aver >= 9){
    score = "Good";
    }
    else if (aver >= 8){
    score = "Fair"
    }
    else if (aver >= 7){
    score = "Above"
    }
    else if (aver >= 5){
    score = "Average"
    }
    else {
    score = "Weak"
    }


    document.getElementById('dtb').innerHTML = "Average score: "+ aver.toFixed(2);
    document.getElementById('grade').innerHTML = "Grade: " + score;

}
