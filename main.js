import {filtradoTipo, ordenarPokemones,buscarPokemonPorNombre, compararPokemones, searchPokemon} from './data.js';
/*import buscarPokemon from './data.js';*/
import data from './data/pokemon/pokemon.js';

//Mostrar información en modal
let arregloPokesCards= [];
const modalPokes = () => {
    arregloPokesCards.forEach(element => {
    element.addEventListener('click', ()=>{
        data.pokemon.forEach(function(pokes){
            let pokeElemento=element.querySelector('#name').textContent;
            if(pokes.name=== pokeElemento){
                let modalgeneral= document.querySelector('.modal');
                let templateModal=document.getElementById('modal-container').content;
                templateModal.querySelector("#nameModal").textContent=pokes.name.toUpperCase();
                templateModal.querySelector("#numModal").textContent=pokes.num;
                templateModal.querySelector("#nameGeneration").textContent="Region: " + pokes.generation.name;
                templateModal.querySelector("#about").textContent=pokes.about;
                templateModal.querySelector("#resistant").textContent=' ';
                pokes.resistant.forEach(resistant => { 
                    templateModal.querySelector("#resistant").innerHTML += `<div class=${resistant}>${resistant}</div>`;
                });
                templateModal.querySelector("#weaknesses").textContent=' ';
                pokes.weaknesses.forEach(weaknesses => { 
                    templateModal.querySelector("#weaknesses").innerHTML += `<div class=${weaknesses}>${weaknesses}</div>`;
                }); 
                templateModal.querySelector("#height").textContent="Height: " + pokes.size.height;
                templateModal.querySelector("#weight").textContent="Weight: " + pokes.size.weight;
                templateModal.querySelector('#name_prev').textContent = '';
                templateModal.querySelector("#imagen_prev").setAttribute("src",'');
                templateModal.querySelector('#imagen_prev').style.display='none';
                let indicador = 0; /*nos va a servir para cambiar contenido del querySelector evolution*/
                templateModal.querySelector('#evolucion').textContent = 'NO TIENE EVOLUCIONES';
                if(Object.prototype.hasOwnProperty.call(pokes.evolution,'prev-evolution')) {
                  indicador = 1;
                  templateModal.querySelector('#imagen_prev').style.display='block';
                  let namePokePrev = pokes.evolution['prev-evolution'][0].name;
                  templateModal.querySelector('#name_prev').textContent = namePokePrev;
                  let pokesPrev = searchPokemon(data.pokemon,namePokePrev);
                  templateModal.querySelector("#imagen_prev").setAttribute("src",pokesPrev[0].img);
                }
                templateModal.querySelector('#name_next').textContent='';
                templateModal.querySelector("#imagen_next").setAttribute("src",'');
                templateModal.querySelector('#imagen_next').style.display='none';
                if(Object.prototype.hasOwnProperty.call(pokes.evolution, 'next-evolution')){
                  indicador = 1;
                  templateModal.querySelector('#imagen_next').style.display='block';
                  let namePokeNext = pokes.evolution['next-evolution'][0].name;
                  templateModal.querySelector('#name_next').textContent = namePokeNext; 
                  let pokesNext = searchPokemon(data.pokemon,namePokeNext);
                  templateModal.querySelector("#imagen_next").setAttribute("src",pokesNext[0].img);
                }
                templateModal.querySelector('#name_pokemon').textContent = '';
                templateModal.querySelector("#imagen_pokemon").setAttribute("src",''); 
                templateModal.querySelector('#imagen_pokemon').style.display='none';
                //templateModal.getElementById("imagen_pokemon").removeAttribute("src");
                if(indicador === 1){
                  templateModal.querySelector('#imagen_pokemon').style.display='block';
                  templateModal.querySelector('#evolucion').textContent = ' EVOLUCIONES';
                  templateModal.querySelector('#name_pokemon').textContent = pokes.name;
                  templateModal.querySelector("#imagen_pokemon").setAttribute("src",pokes.img);
                }

                let clone = document.importNode(templateModal,true);
                modalgeneral.textContent=' ';
                modalgeneral.appendChild(clone);

                document.getElementsByClassName('modal')[0].style.display="flex";

                modalgeneral.addEventListener('click', e =>{
                    if(e.target===modalgeneral){
                        document.getElementsByClassName('modal')[0].style.display="none";
                    }
                  }); 
            }
        }); 
    });
});
}

modalPokes();

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
        template.querySelector(".type").textContent = '';
        pokemon.type.forEach(type => { 
            template.querySelector(".type").innerHTML += `<div class=${type}>${type}</div>`
        }); 
        let clone = document.importNode(template,true);
        fragmento.appendChild(clone);
    });
    cards.appendChild(fragmento);
    arregloPokesCards= document.querySelectorAll('.card');
    modalPokes();
}
mostrarCards (data.pokemon)

    
// Funcionalidad para filtrar pokemon por su tipo
const submenus=document.querySelectorAll('.submenu');
    for(let i=0; i<submenus.length; i++){
        submenus[i].addEventListener('click', ()=>{
            let tipo=submenus[i].id;
            let pokemonesFiltrados= filtradoTipo(data.pokemon,tipo);
            mostrarCards(pokemonesFiltrados);
        })
    }

//Funcionalidad para ordenar los pokemon
const sortData=document.querySelectorAll('.ordenar');
for(let i=0; i<sortData.length; i++){
    sortData[i].addEventListener('click', ()=>{
        let ordenarPor=sortData[i].id;
        var pokes = ordenarPokemones(data.pokemon,'name', ordenarPor);
        mostrarCards(pokes);
    })
}

//Mostrar todos los pokemon
const todos= document.getElementById('btn-all');
todos.addEventListener('click', function(){
  document.querySelector(".buscador").textContent="";
    mostrarCards(data.pokemon); 
    
});

//Buscar pokemones
let search= document.querySelector('.buscador');
search.addEventListener('keyup', (e)=>{
    let inputSearch= e.target.value.toLowerCase();
    let arregloPokes= document.querySelectorAll('.card');
    buscarPokemonPorNombre(inputSearch,arregloPokes);
})

//Ocultar input buscardor, menu desplegable, all pokemon y calcular.
const btnComparar = document.querySelector('#btnComparar');
btnComparar.addEventListener('click', () => {  
  document.querySelector('.buscar').classList.add('ocultar');
  document.querySelector('.buscar').classList.remove('desocultar');
  document.querySelector('.box-filtros').classList.add('ocultar');
  document.querySelector('.box-filtros').classList.remove('desocultar');
  document.querySelector('.btns-calculo-top-all').classList.add('ocultar');
  document.querySelector('.btns-calculo-top-all').classList.remove('desocultar');
  document.querySelector('.estadistica').classList.add('desocultar');
  document.querySelector('.estadistica').classList.remove('ocultar');
  
mostrarCards(data.pokemon);   

document.querySelector('#selectUno').value = 'Seleccione Pokemon'; 
document.querySelector('#selectDos').value = 'Seleccione Pokemon';

});

//Desocultar input buscardor, menu desplegable, all pokemon y calcular.
const btnAtras = document.querySelector('#btnAtras');
btnAtras.addEventListener('click', () => {  
  document.querySelector('.buscar').classList.remove('ocultar');
  document.querySelector('.buscar').classList.add('desocultar');
  document.querySelector('.box-filtros').classList.remove('ocultar');
  document.querySelector('.box-filtros').classList.add('desocultar');
  document.querySelector('.btns-calculo-top-all').classList.remove('ocultar');
  document.querySelector('.btns-calculo-top-all').classList.add('desocultar');
  document.querySelector('.estadistica').classList.add('ocultar');

mostrarCards(data.pokemon);   
});

//Función de evento click a boton calcular y obtener nuevo arreglo poke
const btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', () => {   
  const txtPoke1 = document.querySelector('#selectUno').value; // Nombre Pokemon 1
  const txtPoke2 = document.querySelector('#selectDos').value; // Nombre Pokemon 2
  mostrarCards(compararPokemones(data.pokemon,txtPoke1, txtPoke2)); // Card Pokemon mas poderoso

  const dataPoke1 = loadPokemonSelect(searchPokemon(data.pokemon,txtPoke1)); // Stats Pokemon 1
  const dataPoke2 = loadPokemonSelect(searchPokemon(data.pokemon,txtPoke2)); // Stats Pokemon 2
  manupilarGrafico(txtPoke1,txtPoke2,dataPoke1,dataPoke2);  // Paso datos 
});

//Obtener nuevo arreglo con datos convertidos de string a numerico
const loadPokemonSelect = (poke) => {
  const arrayPoke = [];
  poke.forEach((datos) => {
    const ataque = parseInt(datos.stats['base-attack']);
    const defensa = parseInt(datos.stats['base-defense']);
    const stamina = parseInt(datos.stats['base-stamina']);
    const cp = parseInt(datos.stats['max-cp']);
    const hp = parseInt(datos.stats['max-hp']);
    arrayPoke.push(ataque,defensa,stamina,cp,hp);
  }); 
  return arrayPoke; 
};

//Cargar Select con los nombres de los pokemones
const loadSelect = (listaPoke) => { // Recibe un arreglo con los datos de los pokemones
    let templateList = '';
    templateList = '<option disabled selected value="Seleccione Pokemon">Seleccione Pokemon</option>';  
    listaPoke.forEach((datos) => {   
      const print = `<option value="${datos.name}">${datos.name}</option>`;
      templateList += print;    // Llena los selects con todos los nombres de Pokemon 
    });
    document.querySelector('#selectUno').innerHTML = templateList;
    document.querySelector('#selectDos').innerHTML = templateList;   
  };
  loadSelect(data.pokemon); 

//Creando elemento contenedor de grafico

  function manupilarGrafico(txtPoke1,txtPoke2,dataPoke1,dataPoke2){
    const container = document.querySelector('#root');
    const canvas = '<div class="canvas"><canvas id="grafica" width="400" height="300"></canvas></div>';  
    container.innerHTML += canvas;
    const grafica = document.getElementById('grafica').getContext('2d'); // un contexto de renderizado de dos dimensiones
    Grafico(grafica,txtPoke1,txtPoke2,dataPoke1,dataPoke2);
  }


// creación de Grafica - Estadistica 
    function Grafico(grafica,txtPoke1,txtPoke2,dataPoke1,dataPoke2){
    //para que el eslint no lo lea al chart.
    // eslint-disable-next-line    
    const chart = new Chart (grafica,{  
      type: 'bar',
      data:{
        labels: ['Base-Attack', 'Base-Defense', 'Base-Stamina', 'Max-CP', 'Max-HP'], // Eje x  
        datasets:[
          {
            label: txtPoke1.toUpperCase(),  // Leyenda (nombre Pokemon 1)
            data: dataPoke1, // Eje y    (stats Pokemon 1)       
            backgroundColor: 'rgb(66,134,244)',  // Color blue            
          },
          {
            label: txtPoke2.toUpperCase(),  // Leyenda  (nombre Pokemon 2)
            data: dataPoke2,  // Eje y  (stats Pokemon 2)
            backgroundColor: 'rgb(229,89,50)',  // Color orange       
          }       
        ]     
      },
    });
  }

//Función para botón que nos lleva al inicio de los card 
  let arriba = document.getElementById('arriba');
  arriba.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
  });
  
window.addEventListener("scroll", function(){
  if(document.documentElement.scrollTop > 500){
    arriba.style.display="block";
  } else{
    arriba.style.display="none";
  }
})

const ingresarPokedex = document.querySelector(".ingresarPokedex");
document.querySelector('#nombreEntrenador').focus();

ingresarPokedex.addEventListener('click', () => {
  const nombreEntrenador = document.querySelector(".nombreEntrenador").value;
  document.querySelector('#headerIni').classList.remove('desocultar');
  document.querySelector('#headerIni').classList.add('ocultar');
  document.querySelector('#root').classList.add('desocultar');
  document.querySelector('#root').classList.remove('ocultar');
  document.querySelector('#header').classList.add('desocultar');
  document.querySelector('#header').classList.remove('ocultar');
  document.querySelector('#box_navegador').classList.remove('ocultar');
  document.querySelector('#box_navegador').classList.add('desocultar');
  document.querySelector('#divlogo').classList.remove('ocultar');
  document.querySelector('#divlogo').classList.add('desocultar');
  document.querySelector('#Bienvenidos').textContent = 'Bienvenidos Maestr@ Pokemon ' + nombreEntrenador;

});