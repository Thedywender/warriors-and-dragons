import { EnergyType } from '../Energy';
import Arquetype from './Archetype';

export default class Ranger extends Arquetype {
  private _energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}