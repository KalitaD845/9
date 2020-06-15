document.addEventListener("DOMContentLoaded"function(){
    let ul = document.createElement('ul');
    document.body.appendChild(ul);  

     var xmlHttp = new XMLHttpRequest();
  xmlHttp.onload = function() {
    let coments = JSON.parse(xmlHttp.responseText);
    for (let i = 0; i < 30; i++) {
      let li = document.createElement('li');
      li.textContent = coments[i].name,coments[i].email,coments[i].email;
      ul.appendChild(li);
    }
  }
  xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/comments');
  xmlHttp.send();
})

