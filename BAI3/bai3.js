


function giaiThua(){

    var n = document.getElementById("soN").value;
    var ketqua = 1;
    for(var i = 1; i<=n; i++){
        ketqua *= i;
    }
    document.getElementById("txt").innerHTML ="Giai thừa: "+ ketqua;
}
document.getElementById("btnT").onclick = giaiThua;