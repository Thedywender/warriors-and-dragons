import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _person: Fighter;
  private _monster: Fighter[] | SimpleFighter[];

  constructor(player: Fighter, monster: Fighter[] | SimpleFighter[]) {
    super(player);
    this._person = player;
    this._monster = monster;
  }

  fight(): number {
    while (
      this._person.lifePoints !== -1 
        && this._monster.every((monster) => monster.lifePoints !== -1)) {
      this._monster.forEach((monster) => {
        this._person.attack(monster);
        monster.attack(this._person);
      });
    }

    return super.fight();
  }
}