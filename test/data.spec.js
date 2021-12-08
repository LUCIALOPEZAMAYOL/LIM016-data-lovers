import { filtradoTipo,ordenarPokemones,buscarPokemonPorNombre,compararPokemones,searchPokemon} from '../src/data.js';
import { JSDOM } from "jsdom";
import dataPokemon from '../src/data/pokemon/pokemon.js';
const dom = new JSDOM();

const dataPokes=[
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
     "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "stats": {
      "base-attack": "118",
      "base-defense": "111",
      "base-stamina": "128",
      "max-cp": "1115",
      "max-hp": "113"
    }
  },

  {
    "num": "007",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
    "stats": {
      "base-attack": "94",
      "base-defense": "121",
      "base-stamina": "127",
      "max-cp": "946",
      "max-hp": "112"
    },
  },

  {
    "num": "025",
    "name": "pikachu",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "electric"
    ],
    "stats": {
      "base-attack": "112",
      "base-defense": "96",
      "base-stamina": "111",
      "max-cp": "938",
      "max-hp": "99"
    },
  },

  {
    "num": "238",
    "name": "smoochum",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "type": [
      "ice",
      "psychic"
    ],
    "stats": {
      "base-attack": "153",
      "base-defense": "91",
      "base-stamina": "128",
      "max-cp": "1291",
      "max-hp": "113"
    },
  }
];

//Filtrar po tipo
describe('filtradoTipo', () => {
  it('Es una función', () => {
    expect(typeof filtradoTipo).toBe('function');
  });

  it('validación de entradas de parámetros válidos', () => {
    expect(() => filtradoTipo()).toThrow(TypeError);
    expect(() => filtradoTipo(dataPokemon.pokemon)).toThrow(TypeError);
    expect(() => filtradoTipo(null, null)).toThrow(TypeError);
    expect(() => filtradoTipo(null, '')).toThrow(TypeError);
    expect(() => filtradoTipo(dataPokemon.pokemon,null)).toThrow(TypeError);
    expect(() => filtradoTipo(dataPokemon.pokemon,'')).toThrow(TypeError);
  });

  it('Retorna pokemon steel', () => {
    expect(filtradoTipo(dataPokemon.pokemon,'steel').length).toBe(4);
  });
  it('Retorna pokemon poison', () => {
    let poison = [dataPokes[0]];
    expect(filtradoTipo(dataPokes,'poison')).toEqual(poison);
  });
});

describe('ordenarPokemones', () => {
  let dataPokezAZ=[dataPokes[0], dataPokes[0], dataPokes[2], dataPokes[3], dataPokes[1]];
  let dataPokesZA=[dataPokes[1], dataPokes[3], dataPokes[2], dataPokes[0], dataPokes[0]];
  let dataPokesParametro=[dataPokes[0], dataPokes[0], dataPokes[1], dataPokes[2], dataPokes[3]];
  it('is a function', () => {
    expect(typeof ordenarPokemones).toBe('function');
  });

  it('Odenar por nombre de a-z', () => {
    expect(ordenarPokemones(dataPokesParametro,'name','a-z')).toEqual(dataPokezAZ);
  });
  it('Odenar por nombre de z-a', () => {
    expect(ordenarPokemones(dataPokesParametro,'name','z-a')).toEqual(dataPokesZA);
  });
});

describe('buscarPokemonPorNombre', () => {
  let card = '<div class="card"> <div class="letras"> '+
  '<label id="num">208</label>  <label id="name">steelix</label> </div> '+ 
  '<div> <img src="https://www.serebii.net/pokemongo/pokemon/208.png"></div>'+
  '<div class="type"> <label id="type">  steel  ground</label></div></div>';
  var htmlObject = dom.window.document.createElement('div');
  htmlObject.innerHTML = card;

  let cards = [htmlObject];

  it('Es una función', () => {
    expect(typeof buscarPokemonPorNombre).toBe('function');
  });

  it('Buscar pokemon por nombre', () => {
    buscarPokemonPorNombre('steelix',cards);
    expect(cards[0].style.display).toEqual('block');
  });
  it('Buscar pokemon por una letra que no existe', () => {
    buscarPokemonPorNombre('a',cards);
    expect(cards[0].style.display).toEqual('none');
  });
});

describe('compararPokemones', () => {
  it('Es una función', () => {
    expect(typeof compararPokemones).toBe('function');
  });

  it('Comparar pokemon mas fuerte', () => {
    let bulbasaur=[dataPokes[0]];
    expect(compararPokemones(dataPokes,'bulbasaur','pikachu')). toEqual(bulbasaur);
    expect(compararPokemones(dataPokes,'pikachu','bulbasaur')).toEqual(bulbasaur);
  }); 
});

describe('searchPokemon', () => {
  it('Es una función', () => {
    expect(typeof searchPokemon).toBe('function');
  });

  it('Nos devuelve un arreglo de poke', () => {
    let bulbasaur=[dataPokes[0]];
    expect(searchPokemon(dataPokes,'bulbasaur')).toEqual(bulbasaur);

  });
  it('Nos devuelve un arreglo vacio', () => {
    let bulbasaur=[];
    expect(searchPokemon(dataPokes,'bulbasau')).toEqual(bulbasaur);
    
  });
});