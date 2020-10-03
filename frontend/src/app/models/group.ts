import { Game } from './game';
import { User } from './user';

export class Group{
  constructor(game:Game, users:User[]){
      this.game=game;
      this.users=users;
  }

  game:Game;
  users:User[];
}
