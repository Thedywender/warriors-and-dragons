import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    // if (attackPoints <= 0) {
    //   return this._lifePoints;
    // }
    const newLife = this._lifePoints - attackPoints;

    if (newLife > 0) {
      this._lifePoints = newLife;
    }
    if (newLife <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);   
  }
}

// for (let j = 0; j < 1000; j++) {
//   const monster = new Monster();
//   const character = new Character('');
//   character.levelUp();
//   character.levelUp();

//   let res = true;

//   for (let i = 0; i < 100; i++) {
//     const previousLife = monster.lifePoints;
//     if (previousLife <= 0) break;
//     character.attack(monster);
//     console.log(character.strength > previousLife);
//     res = character.strength > previousLife ? monster.lifePoints <= 0 : monster.lifePoints <= previousLife && (monster.lifePoints >= previousLife - (character.strength) || monster.lifePoints == -1);
//     if (!res) return false;
//   }
// }
