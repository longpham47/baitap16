


function taoTheDIV(){
    var div = "";
    var ketQua = "";
    for(var i = 1; i<=10 ; i++){
        if(i % 2 == 0){
            div =  '<div class="bg-danger text-white p-2">Div chẵn</div>'

        }else{
            div = '<div class="bg-primary text-white p-2">Div lẽ</div>'
        }
        ketQua += div;

    }
    document.getElementById("txt").innerHTML = ketQua;
}
document.getElementById("btnT").onclick = taoTheDIV;