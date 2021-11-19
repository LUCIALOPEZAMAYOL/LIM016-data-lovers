<<<<<<< HEAD
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
=======
//estas funciones son de ejemplo
>>>>>>> 0a38d3205ff2338842ab080132c26fadfecd8c52

//Funcionalidad de ordenar pokemon

export const ordenarPor = () => {
  return 'OMG';
};

