window.onload=function(){
    var gameid=document.getElementById("gameText");
    var elemP = gameid.getElementsByTagName("p");
    var textold;
    for(var i=0;i<elemP.length;i++){
        var text = elemP.item(i)
        text.onmouseover=function () {
            textold=this.innerHTML;
            this.innerHTML="「"+textold+"」";
        }
        text.onmouseout=function () {
            this.innerHTML=textold;
        }
    }
}