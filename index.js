document.getElementById("col").addEventListener('click', hit);

let color1 = 0;
function hit()
{
    if(color1==0){
    document.getElementById("blo").style.color="yellow";
    document.getElementById("goa").style.color="yellow";
    color1 = 1;
    }
    else if(color1==1)
    {
        document.getElementById("blo").style.color="green";
        document.getElementById("goa").style.color="green";
        color1=2;
    }
    else if(color1==2)
    {
        document.getElementById("blo").style.color="red";
        document.getElementById("goa").style.color="red";
        color1=3;
    }
    else if(color1==3)
    {
        document.getElementById("blo").style.color="blue";
        document.getElementById("goa").style.color="blue";
        color1=4;
    }
    else if(color1==4)
    {
        document.getElementById("blo").style.color="purple";
        document.getElementById("goa").style.color="purple";
        color1=5;
    }
    else if(color1==5)
    {
        document.getElementById("blo").style.color="black";
        document.getElementById("goa").style.color="black";
        color1=0;
    }
}



document.getElementById("fon").addEventListener('click', yoyo);

let color2 = 0;
function yoyo()
{
    if(color2==0){
    document.getElementById("blo").style.fontFamily="Italic";
    document.getElementById("goa").style.fontFamily="Italic";
    color2 = 1;
    }
    else if(color2==1)
    {
        document.getElementById("blo").style.fontFamily="sans-serif";
        document.getElementById("goa").style.fontFamily="sans-serif";
        color2=2;
    }
    else if(color2==2)
    {
        document.getElementById("blo").style.fontFamily="Cursive";
        document.getElementById("goa").style.fontFamily="Cursive";
        color2=3;
    }
    else if(color2==3)
    {
        document.getElementById("blo").style.fontFamily="arial";
        document.getElementById("goa").style.fontFamily="arial";
        color2=4;
    }
    else if(color2==4)
    {
        document.getElementById("blo").style.fontFamily="times";
        document.getElementById("goa").style.fontFamily="times";
        color2=5;
    }
    else if(color2==5)
    {
        document.getElementById("blo").style.fontFamily="Impact";
        document.getElementById("goa").style.fontFamily="Impact";
        color2=0;
    }
}

