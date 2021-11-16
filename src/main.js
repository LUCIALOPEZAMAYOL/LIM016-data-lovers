import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(data.pokemon);

//Exrtraer Data card1

/*var cards = [{"num":".num1","name":".name1", "img":"foto1", "type":[".type1"]},
{"num":".num2","name":".name2", "img":"foto2", "type":[".type2"]},
{"num":".num3","name":".name3", "img":"foto3", "type":[".type3"]}];

let contador=0;
cards.forEach(card => {
    const etiquetaNum= document.querySelector(card.num);    
    etiquetaNum.innerHTML= data.pokemon[contador].num;
    
    const etiquetaName= document.querySelector(card.name);    
    etiquetaName.innerHTML= data.pokemon[contador].name;
    
    var imagen= new Image();      
    const etiquetaFoto= document.getElementById(card.img);
    imagen.onload = function() {
        etiquetaFoto.appendChild(imagen);
      };
      
    imagen.src =data.pokemon[contador].img;

    const etiquetaType= document.querySelector(card.type);    
    etiquetaType.innerHTML= data.pokemon[contador].type.join(" ");

    contador++;
});*/

/*let i = 0;
numeros.forEach(num=>{
    const cards= document.querySelector(num);    
    cards.innerHTML= data.pokemon[i].num; 
    console.log(i);
    i++;      
});
let j=0;
nombres.forEach(name=>{
    const cards= document.querySelector(name);    
    cards.innerHTML= data.pokemon[j].name; 
    j++;      
});*/

/*let cardsPokemon= data.pokemon.map((cards,index,array)=> {
    return cards.num;
});

for(let j=0; j < cardsPokemon.length; j++){
    document.querySelector(".num").innerHTML=cardsPokemon;
};*/



/*let j=0;
data.pokemon.forEach((cards,index,array)=>{
document.querySelector(".num").innerHTML=cards.num;
j++;
});*/

/*data.pokemon.forEach((cards,index,array)=>{
    return cards;
    });

    document.getElementById("root").innerHTML= cards;*/

    const cards = document.querySelector("#root");
    const template = document.getElementById("template-card").content;
    const fragmento = document.createDocumentFragment();
    
    data.pokemon.forEach(pokemon =>{
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
    