// Write your code here!
const main = document.querySelector('#main');

main.remove();

const newHeader = document.createElement('h1');

newHeader.innerHTML = "Jon is the champion";

newHeader.setAttribute("id", "victory");
document.body.append("newHeader");



