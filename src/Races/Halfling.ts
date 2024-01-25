import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints: number;
  static contador = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.contador += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.contador;
  }
}