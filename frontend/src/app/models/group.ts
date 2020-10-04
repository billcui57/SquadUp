import { Game } from './game';
import { User } from './user';

export class Group{
  constructor( gameId:number, users:User[], groupId: number){
      this.gameId=gameId;
      this.users=users;
      this.groupId=groupId;
  }

  gameId:number;
  users:User[];
  groupId:number;
}
