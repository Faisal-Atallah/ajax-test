document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost/ajax-test/database-users.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      var users = JSON.parse(this.responseText);

      var output = '';

      for(var i in users){
        output += '<ul>' +
          '<li>ID: '+users[i].id+'</li>' +
          '<li>Name: '+users[i].name+'</li>' +
          '</ul>';
      }

      document.getElementById('users').innerHTML = output;
    }
  }

  xhr.send();
}
