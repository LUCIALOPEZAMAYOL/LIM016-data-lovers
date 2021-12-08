//Funcionalodad de filtrar pokemon por tipo
  export const filtradoTipo = (pokemones, tipo) => {
    if(pokemones===undefined ||pokemones===null || tipo===undefined ||tipo==='' || tipo===null){
      throw new TypeError("Los datos de entrada son inválidos");
    }
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
  export const buscarPokemonPorNombre = (search,cards)=>{
    cards.forEach(element => {
      let nombrePokemon = element.querySelector('#name').textContent;
        if(nombrePokemon.includes(search)){
            element.style.display = 'block';
            //console.log('ele: ',element.style.display);
          }else{
            element.style.display = 'none'
          }
        });
    };

//Función calcular pokemon más poderoso
  export const compararPokemones = (data, pokemonUno, pokemonDos) => {
    let suma1 = '';
    let suma2 = '';
    const poke1 = [];
    const poke2 = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == pokemonUno) {
          suma1 = parseInt(data[i].stats['base-attack']) + parseInt(data[i].stats['base-defense']) +
            parseInt(data[i].stats['base-stamina']) + parseInt(data[i].stats['max-cp']) +
            parseInt(data[i].stats['max-hp']);  //suma sus stats
          poke1.push(data[i]);  // Guarda la data del pokemon1
        }
        if (data[i].name == pokemonDos) {
          suma2 = parseInt(data[i].stats['base-attack']) + parseInt(data[i].stats['base-defense']) +
              parseInt(data[i].stats['base-stamina']) + parseInt(data[i].stats['max-cp']) +
              parseInt(data[i].stats['max-hp']);  //suma sus stats          
          poke2.push(data[i]);  // Guarda la data del pokemon2
        }  
      }
      if (suma1 > suma2){ 
        return poke1; // Si la suma de stats del (pokemon1 > pokemon2) -> mas poderoso (pokemon1)
      }else {
        return poke2; // Si la suma de stats del (pokemon2 > pokemon1) -> mas poderoso (pokemon2)
      }
    };

//Retorna un nuevo arreglo de pokemon
  export const searchPokemon = (data, namePokemon) => {
    const arrayPoke = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == namePokemon) {
          arrayPoke.push(data[i]); 
        }   
      }
      return arrayPoke; 
    };