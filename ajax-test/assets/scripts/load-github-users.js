function loadGitHubUsers(){
var url='https://api.github.com/users';
var xhr =new XMLHttpRequest();
xhr.open('GET',url,true);
xhr.onload=function(){
  if(this.status == 200){
    var users=JSON.parse(this.responseText);
      var output= '';
      for(var i in users){
        output +=
        '<div class="user">'+
        '<img src="'+users[i].avatar_url+'" width="70" height="70">'+
        '<ul>' +
        '<li>ID:'+users[i].id+'</li>'+
        '<li>Login:'+users[i].login+'</li>'+
        '</ul>'+
        '</div>'
      }
      document.getElementById('gitUsers').innerHTML=output;
  }
}
xhr.send();
}
