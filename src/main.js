import {filtradoTipo, ordenarPokemones} from './data.js';
/*import buscarPokemon from './data.js';*/
import data from './data/pokemon/pokemon.js';


//Funcionalidad para mostrar los pokemon en cards

const cards = document.querySelector("#root");
const template = document.getElementById("template-card").content;
const fragmento = document.createDocumentFragment();

const mostrarCards = (pokemones)=>{
    cards.innerHTML='';
    pokemones.forEach(pokemon =>{
        template.querySelector("img").setAttribute("src",pokemon.img);
        template.querySelector("#num").textContent = pokemon.num;
        template.querySelector("#name").textContent=pokemon.name;
        template.querySelector("#type").textContent = '';
        pokemon.type.forEach(type => { 
            template.querySelector("#type").textContent += ' ' + type;
        }); 
      let clone = document.importNode(template,true);
        fragmento.appendChild(clone);
      });
      cards.appendChild(fragmento);
}
mostrarCards(data.pokemon);
    
// Funcionalidad para filtrar pokemon por su tipo
const submenus=document.querySelectorAll('.submenu');
    for(let i=0; i<submenus.length; i++){
        submenus[i].addEventListener('click', ()=>{
            let tipo=submenus[i].id;
            let pokemonesFiltrados= filtradoTipo(data.pokemon,tipo);
            mostrarCards(pokemonesFiltrados);
        })
    };
    const todos= document.getElementById('todos');
    todos.addEventListener('click', ()=>{
        mostrarCards(data.pokemon);
    });

//Funcionalidad para ordenar los pokemon

/*const sortData=document.querySelectorAll('.ordenar');
for(let i=0; i<sortData.length; i++){
    sortData[i].addEventListener('click', ()=>{
        let nombre=sortData[i];
        let pokemonesOrdenados = ordenarPokemones(data.pokemon, nombre);
        mostrarCards(pokemonesOrdenados);
    })
};*/
/*document.getElementById('a-z').addEventListener('click', ()=>{
    
    })
    mostrarCards(pokemonesOrdenados);
})*/

document.getElementById('z-a').addEventListener('click', ()=>{
    const pokemonesOrdenados= data.pokemon.sort((a,b)=>{
        if(a.name < b.name){
            return 1;
        }
        if(a.name >b.name){
            return -1;
        }
        return 0;
    })
    mostrarCards(pokemonesOrdenados);
})

