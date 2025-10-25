//Akses Element Menggunakan Id
const elementNode = document.getElementById("belajar");
const textNode = elementNode.textContent;
console.log(textNode);
console.log(elementNode.nodeType);

//getElementsByClassName()
const elements = document.getElementsByClassName("p1")[0];
console.log(elements);

//3. querySelector()
const elementQs = document.querySelector(".a.p");
console.log(elements);

//inneHTML
elementNode.innerHTML = "<i><b>Hello Dinusian</b></i>";

//textNode
 