


function inSoNguyen(){
 
    var sum = 0;
    var n = 0;
    while(sum<1e4){
        n++;
        sum += n;

    }

    
   
    
    document.getElementById("txt2").innerHTML ="Số nguyên dương nhỏ nhất: "+ n;
}
document.getElementById("btnTinh2").onclick = inSoNguyen;