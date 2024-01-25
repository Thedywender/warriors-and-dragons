import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  static contador = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.contador += 1;
  }

  static createdRacesInstances(): number {
    return Elf.contador;
  }
}
