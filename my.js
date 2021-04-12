function check(){
    var a= parseFloat(document.getElementById("a").value);
    var b= parseFloat(document.getElementById("b").value);
    var c= parseFloat(document.getElementById("c").value);
    if (a+b>c && a+c>b && b+c>a && a>0 && b>0 && c>0)
    {
        document.getElementById("kq").innerHTML="a,b,c có thể là 3 cạnh của một tam giác!";
    }
    else
    {
        document.getElementById("kq").innerHTML="a,b,c không phải là cạnh của một tam giác!";
    }
}