function ac(){
document.getElementById('cal').value="";
}
function decimal(){
var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+".";
}
function multi(){
var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"*";
}
function add(){
var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"+";
}
function sub(){
var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"-";
}
function div(){
var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"/";
}

function mod(){
var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"%";
}
function del(){
 
var a=document.getElementById('cal').value;
var b=a.length-1;
document.getElementById('cal').value=a.substring(0,b);
}

function one(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"1";

}
function two(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"2";

}
function three(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"3";

}
function four(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"4";

}
function five(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"5";

}
function six(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"6";

}
function seven(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"7";

}
function eight(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"8";

}
function nine(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"9";

}
function zero(){

var a=document.getElementById('cal').value;
document.getElementById('cal').value=a+"0";

}
function equal(){
 
var a=document.getElementById('cal').value;
document.getElementById('cal').value=eval(a);
}
