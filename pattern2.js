 pyramid2(5);        
    function pyramid2(rows) {
        var i,j;
        var cols=rows*2-1;
        var sp=cols/2;
        
        for(i=1;i<=rows;i++) {
                var out="";

            for(k=1;k<sp;k++)
                out+=" ";  

            for(j=i;j<=i+i-1;j++)
                out+=j%10;

            for(j=j-2;j>=i;j--)
                out+=j%10;
            
            console.log(out);
            sp-=1;
        }
    }