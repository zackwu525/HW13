

function showMsg(msg1, msg2) {
    var allMsg =
        msg1 + msg2;
    return allMsg;
}

function random() {
    var M = parseInt(document.getElementById('M').value);
    /*console.log(M);*/
    /*return Math.floor(Math.random()*M+1);*/
    document.getElementById('result').value = "產生亂數 " + Math.floor(Math.random() * M + 1);
}

function bigmath() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    if (a > b) {
        document.getElementById('result2').value = a + " 比較大";
    } else {
        document.getElementById('result2').value = b + " 比較大";
    }
}

function arr() {
    var arr1 = document.getElementById('arr1').value;
    var arr2 = arr1.split(",");
    var z = arr2.slice(-1);
    document.getElementById('result3').value = "最後一個元素為" + z;
}

function abp() {
    var ap = parseInt(document.getElementById('ap').value);
    var bp = parseInt(document.getElementById('bp').value);
    document.getElementById('result4').value = "答案為 " + ((ap * ap) + (bp * bp));
}


function leapYearA() {
    var yearA = parseInt(document.getElementById('yearA').value);
    var ya = "Yes";
    var yb = "No";
    if (yearA % 400 === 0) {
        document.getElementById('result5').value = ya;
    } else if (yearA % 4 === 0 && yearA % 100 != 0) {
        document.getElementById('result5').value = ya;
    } else {
        document.getElementById('result5').value = yb;
    }
}





myShose = {
    brand: "sk",
    size: 7,
    forFemale: true
}


   
