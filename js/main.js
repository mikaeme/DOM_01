'use strict';
const berry = document.getElementById('berry');
const orange = document.querySelector('[data-foodtype]');
const list = document.getElementsByTagName('li');
const nList = document.querySelectorAll('li')

console.log(berry);
console.log("I found the berry:" + berry.innerHTML);

console.log(orange);
console.log("I found the fruit:" + orange.innerHTML);

console.log(list);
console.log(nList);

berry.style.backgroundColor = "red";
orange.style.backgroundColor = "orange";

console.log('For loop:')
for(let i=0; i<list.length; i++){
  list[i].style.width="100px";
  list[i].style.listStyleType="none";
  let y = list[i].innerHTML;
  if(y === 'Pear') list[i].style.backgroundColor = "green";
  console.log(y);
}

console.log('forEach loop:')
nList.forEach((item) =>{
  console.log(item.innerHTML);
  item.style.border = "1px solid black";
});
