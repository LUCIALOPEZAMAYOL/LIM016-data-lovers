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

//Funcionalidad de ordenar pokemon

/*export const ordenarPokemones = (dataPokemon,nombre) => {
    let pokemonesOrdenados=[];
    if(nombre==='name'){
      if(ordenar==='a-z'){
        pokemonesOrdenados=data.pokemon.sort(function(a,b){
          if(a.name > b.name) return 1;
          if(a.name === b.name) return 0;
          return -1;
        });
      } else {
        pokemonesOrdenados=data.pokemon(function(a,b){
          if(a.name>b.name) return 1;
          if(a.name===b.name)return 0;
          return -1;
        })
      }
      }};*/

      export const filtradoTipo = (datapokemones, nombre) => {

      const pokemonesOrdenados= datapokemones.sort((a,b)=>{
        if(a.nombre < b.nombre){
            return -1;
        }
        if(a.nombre >b.nombre){
            return 1;
        }
        return 0;

      }
      )};

