function loadText(){

var xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost/ajax-test/sample.txt',true);

console.log('Ready state',xhr.readyState);

xhr.onreadystatechange= function(){

if(this.readyState == 4 && this.status == 200){
console.log(this.responseText);
}

}
xhr.send();
}
