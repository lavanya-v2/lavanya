pyramid1(5);
    function pyramid1(rows) {
        var cols=rows*2-1;
        var sp=cols/2;
        var num=1;  
        for(var i=1; i<=rows;i++) {
            var out="";
            for(k=1;k<sp;k++)
                out+=" ";
            for(var j=1; j<=num; j++) {
                out+=1;
            }   
        sp=sp-1;
        num=num+2;
        console.log(out);
    }
}