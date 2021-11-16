import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*data.pokemon.forEach((objetos)=>{
    const etiqueta = document.createElement('div')
    etiqueta.className='cards'
    const elementos=`
    <p>${objetos.num}</p>
    `;
    etiqueta.innerHTML=
})*/

const cards = document.querySelector("#root");

const template = document.getElementById("template-card").content;

const fragmento = document.createDocumentFragment();

data.pokemon.forEach(pokemon =>{
    template.querySelector("img").setAttribute("src",pokemon.img);
    template.querySelector("#num").textContent = pokemon.num;
    template.querySelector("#name").textContent=pokemon.name;
    template.querySelector("#type").textContent = '';
    pokemon.type.forEach(type => { 
        template.querySelector("#type").textContent += ' ' + type+' |';
    }); 
  let clone = document.importNode(template,true);
    fragmento.appendChild(clone);
  });
  cards.appendChild(fragmento);