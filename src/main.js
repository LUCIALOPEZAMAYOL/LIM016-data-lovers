import {filtradoTipo, ordenarPokemones,buscarPokemonPorNombre} from './data.js';
/*import buscarPokemon from './data.js';*/
import data from './data/pokemon/pokemon.js';


//Funcionalidad para mostrar los pokemon en cards

const mostrarCards = (pokemones)=>{
    const cards = document.querySelector("#root");
    const template = document.getElementById("template-card").content;
    const fragmento = document.createDocumentFragment();
    
    cards.innerHTML='';
    pokemones.forEach(pokemon =>{
        template.querySelector("img").setAttribute("src",pokemon.img);
        template.querySelector("#num").textContent = pokemon.num;
        template.querySelector("#name").textContent = pokemon.name;
        template.querySelector("#type").textContent = '';
        pokemon.type.forEach(type => { 
            template.querySelector("#type").textContent += '  '  + type;
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

//Funcionalidad para ordenar los pokemon
const sortData=document.querySelectorAll('.ordenar');
for(let i=0; i<sortData.length; i++){
    sortData[i].addEventListener('click', ()=>{
        let ordenarPor=sortData[i].id;
        var pokes = ordenarPokemones(data.pokemon,'name', ordenarPor);
        mostrarCards(pokes);
    })
};

//Mostrar todos los pokemon
const todos= document.getElementById('btn-all');
todos.addEventListener('click', function(){
    mostrarCards(data.pokemon);
});


//Buscar pokemones
let arregloPokes= document.querySelectorAll('.card');
buscarPokemonPorNombre(arregloPokes);

//Mostrar información en modal

arregloPokes.forEach(element => {
    element.addEventListener('click', (e)=>{
        data.pokemon.forEach(function(pokes){
            let pokeElemento=element.querySelector('#name').textContent;

            if(pokes.name=== pokeElemento){
                console.log(pokeElemento);
                let modalgeneral= document.querySelector('.modal');
                let templateModal=document.getElementById('modal-container').content;
                templateModal.querySelector("#numModal").textContent=pokes.num;
                templateModal.querySelector("#nameModal").textContent=pokes.name;
                templateModal.querySelector("#nameGeneration").textContent="Región: " + pokes.generation.name;
                templateModal.querySelector("#about").textContent=pokes.about;
                templateModal.querySelector("#resistant").textContent=' ';
                pokes.resistant.forEach(resistencia => { 
                    templateModal.querySelector("#resistant").textContent += '  '  + resistencia;
                });
                templateModal.querySelector("#weaknesses").textContent=' ';
                pokes.weaknesses.forEach(debilidad => { 
                    templateModal.querySelector("#weaknesses").textContent += '  '  + debilidad;
                }); 
                templateModal.querySelector("#height").textContent="Height: " + pokes.size.height;
                templateModal.querySelector("#weight").textContent="Weight: " + pokes.size.weight;
                let clone = document.importNode(templateModal,true);
                modalgeneral.textContent=' ';
                modalgeneral.appendChild(clone);
            }
        }); 
    });
});