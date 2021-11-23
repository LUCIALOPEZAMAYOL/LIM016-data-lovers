//Funcionalodad de filtrar pokemon por tipo
  export const filtradoTipo = (pokemones, tipo) => {
      let pokemonesFiltrados = pokemones.filter((pokemon)=>{
        for(let i=0; i<pokemon.type.length; i++){
          if(pokemon.type[i]===tipo) {
            return pokemon;
          }
        }
      });
      return pokemonesFiltrados; 
  };

//Funcionalidad de ordenar el arreglo de pokemones
      export const ordenarPokemones = (pokemones, sortBy, sortOrder) => {
      let arrayPoke=[...pokemones];
      if(sortOrder==='a-z'){
        return arrayPoke.sort(function (a,b){
          if(a[sortBy]>b[sortBy]) return 1; 
          if(a[sortBy]===b[sortBy]) return 0;
          return -1;
        });
      }else{
        return arrayPoke.sort(function (a,b){
          if(a[sortBy]<b[sortBy]) return 1; 
          if(a[sortBy]===b[sortBy]) return 0;
          return -1;
        });
      }      
    };

    //Buscar por nombre 
    export const buscarPokemonPorNombre = (cards) => { 
      document.addEventListener('keyup',(e)=>{        
        cards.forEach(card => {
            let nombrePokemon = card.querySelector('#name').textContent;
            if(nombrePokemon.includes(e.target.value.toLowerCase())){
              card.style.display = 'block'
            }else{
              card.style.display = 'none'
            }
          });
      });
    };

     

