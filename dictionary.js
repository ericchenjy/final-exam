
var input = document.querySelector('word');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch('https://dictionaryapi.com/api/v3/references/sd4/json/'+ input + '?key=c841b427-b484-4333-8374-71386cc61dd0')

.then(response => response.json())
.then(data => {
  var num = data['meta']['id'];

  temp.innerHTML = "Temp - " + num;

})

.catch(err => alert("Name doesn't exist"));
})