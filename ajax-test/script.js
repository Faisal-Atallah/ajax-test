





function loadUser(){

var xhr = new XMLHttpRequest();

xhr.open('GET','http://localhost/ajaxL/user.json',true);

xhr.onload = function(){

if(this.status == 200){
var user = JSON.parse(this.responseText);
var output = '';
output += '<ul>' +
'<li>ID: '+user.id+'</li>'+
'<li>Name: '+user.name+'</li>'+
'<li>Email: '+user.email+'</li>'+
'</ul>';
document.getElementById('user').innerHTML= output;

}

}

xhr.send();

}

function loadUsers(){

var xhr = new XMLHttpRequest();

xhr.open('GET','http://localhost/ajaxL/users.json',true);

xhr.onload = function(){

for(var i in users){

  if(this.status == 200){
  var user = JSON.parse(this.responseText);
  var output = '';
  output += '<ul>' +
  '<li>ID: '+user.id+'</li>'+
  '<li>Name: '+user.name+'</li>'+
  '<li>Email: '+user.email+'</li>'+
  '</ul>';

}
document.getElementById('users').innerHTML= output;

}

}

xhr.send();

}











function loadText(){

var xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost/ajaxL/sample.txt',true);

console.log('Ready state',xhr.readyState);

xhr.onreadystatechange= function(){

if(this.readyState == 4 && this.status == 200){
console.log(this.responseText);
}

}
xhr.send();
}

(function(){
document.getElementById("demo").innerHTML="Hello World";
})();
(function(){
})();
var OK=200;
var requestFinished=4;
var xhttp =new XMLHttpRequest();
function loadDocument(){
xhttp.onreadystatechange= function(){
if(this.readyState == requestFinished && this.status == OK){
var result= this.responseText;
var jsResult=JSON.parse(result);
document.getElementById("demo").innerHTML=this.getResponseHeader("Last-modified");
}
};
xhttp.open("GET","https://api.fixer.io/latest",true);
xhttp.send();
}
function loaddoc(){
xhttp.onreadystatechange= function(){
  if(this.readyState == requestFinished && this.status == OK){
    document.getElementById("demo2").innerHTML=this.responseText;
  }
};
xhttp.open("GET","https://api.fixer.io/latest",true);
xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.send("fname=faisal&lname=sami");
}
