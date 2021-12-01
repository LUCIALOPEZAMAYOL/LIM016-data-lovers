import { filtradoTipo,ordenarPokemones,buscarPokemonPorNombre,compararPokemones,searchPokemon } from '../src/data.js';

//Filtrar po tipo
describe('filtradoTipo', () => {
  it('is a function', () => {
    expect(typeof filtradoTipo).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
