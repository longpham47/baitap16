

function tinhTong(){
        var x = document.getElementById("soX").value;
        var n = document.getElementById("soN").value;
        var tong = 0;
        for(var i =1 ;i<=n ;i++){
            tong += Math.pow(x, i);
        }

        document.getElementById("txt").innerHTML ="Tổng: " + tong;
}
document.getElementById("btnT").onclick = tinhTong;