// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Programa top</h1>`;

function mostraNome(){
const nomeDiv = document.getElementById('result');
nomeDiv.innerHTML = document.getElementById("name").value + " é legal!";
}
