import Movement from './movement';
import PokeTypes from './pokeTypes';

let typesDict = [];
class Pokemon {
  constructor({
    id,
    name,
    level,
    types = [],
    weigth,
    heigth,
    shinny,
    moveset = [],
    generation,
    stats = [],
  }) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.types = types;
    this.weigth = weigth;
    this.heigth = heigth;
    this.shinny = shinny;
    this.moveset = moveset;
    this.generation = generation;
    this.stats = stats;

    typesDict = toLoadTypes(PokeTypes);
    moveset.forEach((movement) => this.addToMoveset(movement));
    types.forEach((type) => this.setTypes(type));
  }

  addToMoveset(movement) {
    if (!(movement instanceof Movement))
      throw new Error('Only movements can be added to the moveset.');

    if (
      this.moveset.find((x) => x == movement) ||
      this.moveset.length == Pokemon.MAX_MOVEMENTS_PER_MOVESET
    )
      return false;
    else {
      this.moveset.push(movement);
      return true;
    }
  }

  setTypes(type) {
    if (!typesDict.map((x) => x.name).includes(type))
      throw new Error(
        `Invalid type: ${type} is not in the allowed types.(${typesDict
          .map((x) => x.name)
          .join(', ')})`
      );

    if (
      this.types.find((x) => x == type) ||
      this.types.length == Pokemon.MAX_TYPES_PER_POKEMON
    )
      return false;
    else {
      this.types.push(type);
      return true;
    }
  }

  toLoadTypes(pokeTypes) {
    const typeArrays = [];

    for (const key in pokeTypes) {
      if (pokeTypes.hasOwnProperty(key)) {
        const typeData = pokeTypes[key];

        const type = new Type({
          id: key,
          name: typeData.name,
          effective: typeData.effective,
          ineffective: typeData.ineffective,
          noEffect: typeData.noEffect,
        });

        typeArrays.push(type);
      }
    }
    return typeArrays;
  }
}

Pokemon.MAX_TYPES_PER_POKEMON = 2;
Pokemon.MAX_MOVEMENTS_PER_MOVESET = 4;
export default Pokemon;
