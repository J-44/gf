stem=["FATHER","MOTHER","ME","SMALL BROTHER"];
fi=["f.jpg","m.jpg","b.jpg","images.jpg"];
i=0;
u=0;
function run(){
    if(i == 4){
        i=0;
    }
    if(u == 4){
        u=0;
    }
    document.getElementById("size").src = fi[i];
    i++;
    document.getElementById("do").innerHTML = stem[u];
    u++;
}

