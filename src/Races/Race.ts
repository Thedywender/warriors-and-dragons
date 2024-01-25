export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }
}